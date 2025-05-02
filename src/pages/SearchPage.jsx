import React, { useEffect } from "react";
import { MovieCard, Skeleton } from "../components";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import useDynamicTitle from "../hooks/useDynamicTitle";

export const SearchPage = ({ apiPath, title }) => {

  useDynamicTitle(title);

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies, isLoading } = useFetch(
    `${import.meta.env.VITE_APP_API_URL}${apiPath}?api_key=${
      import.meta.env.VITE_APP_API_KEY
    }&query=${queryTerm}`
  );

  const renderSkeletons = (count) => {
    const skeletons = [];
    for (let i = 0; i < count; i++) {
      skeletons.push(<Skeleton key={i} />);
    }
    return skeletons;
  };

  const noResultFoundTitle = `No results found for ${queryTerm}`;
  const resultFoundTitle = `Results for: ${queryTerm}`;
  
  return (
    <main>
        <section className='my-4'>
            <h2 className='dark:text-slate-50 text-slate-800 text-4xl'>
                {movies && movies.results.length === 0 ? noResultFoundTitle : resultFoundTitle}
            </h2>
        </section>
        <div className='flex flex-wrap justify-start max-sm:justify-evenly'>
          {  isLoading && renderSkeletons(6) }
          { movies && movies.results.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
        </div>
      </main>
  );
};
