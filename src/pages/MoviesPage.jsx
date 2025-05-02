import React, { useEffect, useState } from 'react'
import { MovieCard, Skeleton } from '../components'
import useFetch from '../hooks/useFetch';
import useDynamicTitle from '../hooks/useDynamicTitle';
import Image from "../assets/image-1.jpg"
import { Link } from 'react-router-dom';

export const MoviesPage = ({ apiPath, title }) => {

  //Variables
  const [pageNum, setPageNum] = useState(1);
  const [moviesData, setMoviesData] = useState([]);
  const fetchResponse = useFetch(`${import.meta.env.VITE_APP_API_URL}${apiPath}?api_key=${import.meta.env.VITE_APP_API_KEY}&page=${pageNum}`);

  //Hooks
  useEffect(()=>{
    if(fetchResponse?.data){
      setMoviesData(prevItems => [...(prevItems || {}), ...fetchResponse.data.results]);
    }
  }, [fetchResponse.data]);

  useDynamicTitle(title);

  //Event Handlers
  function handleLoadMore(){
    var page = pageNum;
    setPageNum(pageNum+1);
    fetchResponse.setUrl(`${import.meta.env.VITE_APP_API_URL}${apiPath}?api_key=${import.meta.env.VITE_APP_API_KEY}&page=${++page}`);
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
      <div class="m-2 p-6 bg-white border flex flex-column justify-between items-center border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Confused on what to watch?</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Get movie suggestions basis on Genres you like & Language you prefer!</p>
          </div>
          <div>
            <Link to="/movies/suggest" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary dark:hover:bg-primary-700 dark:focus:ring-blue-800">
                Get Suggestions
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
          </div>
      </div>

      <div className='flex flex-wrap justify-between'>
        { fetchResponse?.isLoading && renderSkeletons(6)}
        { moviesData && moviesData.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
      <button className="block px-3 py-2 mx-auto my-5 text-sm font-medium text-center text-white bg-primary-800 rounded-lg hover:bg-primary-800 focus:outline-none dark:bg-primary-800 dark:hover:bg-primary-1000" onClick={handleLoadMore}>Load more</button>
    </main>
  )
}