import React from "react";

export const DetailMovie = ({ movie }) => {
  const imagePath =  movie.poster_path ? 
  `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 
  'https://placehold.co/382x573?text=No+Image';
  return (
    <div className="flex justify-around flex-wrap py-5">
      <div className="max-w-sm">
        <img className="rounded" src={imagePath} alt={movie.title} />
      </div>
      <div className="max-w-2xl text-slate-800 dark:text-slate-50 max-md:px-5">
        <h1 className="text-5xl text-bold my-3 max-md:text-center max-md:text-4xl">
          {movie.title}
        </h1>
        <p className="my-4">{movie.overview}</p>
        <p className="my-5 flex flex-wrap gap-2">
          {movie.genres &&
            movie.genres.map((genre) => (
              <span
                className="mr-2 border border-slate-300 rounded dark:border-slate-600 px-4 py-1.5"
                key={genre.id}
              >
                {genre.name}
              </span>
            ))}
        </p>

        {/* Copied From flowbite */}
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p className="ms-2 text-sm text-slate-800 dark:text-slate-50">
            {movie.vote_average}
          </p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <span className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
            {movie.vote_count} reviews
          </span>
        </div>

        <hr className="my-4" />

        {/* Copied From flowbite */}
        <div class="relative overflow-x-auto">
          <h2 className="text-2xl">Details:</h2>
          <table class="text-sm text-left rtl:text-right text-slate-800 dark:text-slate-50">
            <tbody>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="py-4 font-medium text-slate-800 whitespace-nowrap dark:text-slate-50"
                >
                  Runtime:
                </th>
                <td class="py-4">{movie.runtime} mins.</td>
              </tr>

              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="py-4 font-medium text-slate-800 whitespace-nowrap dark:text-slate-50"
                >
                  Budget:
                </th>
                <td class="py-4">{movie.budget}</td>
              </tr>

              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="py-4 font-medium text-slate-800 whitespace-nowrap dark:text-slate-50"
                >
                  Revenue:
                </th>
                <td class="py-4">{movie.revenue}</td>
              </tr>

              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="py-4 font-medium text-slate-800 whitespace-nowrap dark:text-slate-50"
                >
                  Release Date:
                </th>
                <td class="py-4">{movie.release_date}</td>
              </tr>

              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="py-4 font-medium text-slate-800 whitespace-nowrap dark:text-slate-50"
                >
                  IMDB Code:
                </th>
                <td class="py-4">
                  <a
                    href={`https://imdb.com/title/${movie.imdb_id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {movie.imdb_id}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
