import React, { useEffect, useState } from 'react'
import { MovieCard, Skeleton } from '../components'
import useFetch from '../hooks/useFetch';
import useDynamicTitle from '../hooks/useDynamicTitle';
import { useLocation } from 'react-router-dom';

export const SuggestionsPage = () => {

  //Variables
  const location = useLocation();
  const genres = location.state.data.filter(obj=>obj.type==="Genre").map(obj=>obj.id).join(",");
  const language =  location.state.data.find(obj => obj.type === "Language")?.id || "";

  //State Variables
  const [moviesData, setMoviesData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  
  const fetchResponse = useFetch(`${import.meta.env.VITE_APP_API_URL}${location.state.apiPath}?api_key=${import.meta.env.VITE_APP_API_KEY}&with_genres=${genres}&with_original_language=${language}&page=${pageNum}`);

  //Pre settings
  useDynamicTitle(location.state.title);

  //Hooks
  useEffect(()=>{
    if(fetchResponse?.data){
      setMoviesData(prevItems => [...(prevItems || {}), ...fetchResponse.data.results]);
    }
  }, [fetchResponse.data]);

  //Event Handlers
  function handleLoadMore(){
    var page = pageNum;
    setPageNum(pageNum+1);
    fetchResponse.setUrl(`${import.meta.env.VITE_APP_API_URL}${location.state.apiPath}?api_key=${import.meta.env.VITE_APP_API_KEY}&with_genres=${genres}&with_original_language=${language}&page=${++page}`);
  }

  //Renders
  const renderSkeletons = (count) => {
    const skeletons = [];
    for (let i = 0; i < count; i++) {
      skeletons.push(<Skeleton key={i} />);
    }
    return skeletons;
  }

  return (
    <main>
      <h2 className="text-2xl block dark:text-white mb-4">Here are the movies you would like</h2>
      <div className='flex flex-wrap justify-start max-sm:justify-evenly'>
        { fetchResponse?.isLoading && renderSkeletons(6)}
        { moviesData && moviesData.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
      <button className="block px-3 py-2 mx-auto my-5 text-sm font-medium text-center text-white bg-primary-800 rounded-lg hover:bg-primary-800 focus:outline-none dark:bg-primary-800 dark:hover:bg-primary-1000" onClick={handleLoadMore}>Load more</button>
    </main>
  )
}