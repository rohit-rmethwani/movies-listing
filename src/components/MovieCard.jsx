import React from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  //Variables
  const { id, original_title, overview, poster_path } = movie;
  const imagePath = poster_path ? 
	`https://image.tmdb.org/t/p/w500/${poster_path}` : 
	'https://placehold.co/382x573?text=No+Image';

  return (
    <div className="m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/movies/${id}`}>
        <img className="rounded-t-lg" src={imagePath} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/movies/${id}`}>
          <h5 className="hover:text-primary-800 dark:hover:text-primary-800 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {`${overview.substring(0, 150)}...`}
        </p>
        <Link
          to={`/movies/${id}`}
          className="inline-flex items-center px-3 py-2 
                    text-sm font-medium text-center text-white bg-primary-800 
                    rounded-lg hover:bg-primary-800 focus:outline-none 
                    dark:bg-primary-800 dark:hover:bg-primary-1000"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            ariaHidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
