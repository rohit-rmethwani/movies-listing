import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import { DetailMovie } from '../components/DetailMovie';
import useDynamicTitle from '../hooks/useDynamicTitle';

export const MovieDetailPage = ({title}) => {
  const params = useParams();
  const {data, error, isLoading, setUrl }= useFetch();

  useDynamicTitle(title);

  useEffect( () => {
    const movieId = params.id;
    const URL = `${import.meta.env.VITE_APP_API_URL}movie/${movieId}?api_key=${import.meta.env.VITE_APP_API_KEY}`;
    setUrl(URL);
  }, []);

  return (
    <main>
      { data && <DetailMovie movie={data} /> }
    </main>
  )
}