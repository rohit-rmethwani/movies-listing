import React from "react";
import { Route, Routes } from "react-router-dom";
import { MovieDetailPage, MoviesPage, NotFoundPage, SearchPage, WizardPage, SuggestionsPage } from "../pages";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MoviesPage apiPath="movie/now_playing" key="homepage" title="Film Fiesta - Now Playing"/>}
        />
        <Route path="/movies/:id" element={<MovieDetailPage title="Film Fiesta"/>} />
        <Route
          path="/movies/top-rated"
          element={<MoviesPage apiPath="movie/top_rated" key="topRated" title="Film Fiesta - Top Rated"/>}
        />
        <Route
          path="/movies/popular"
          element={<MoviesPage apiPath="movie/popular" key="popular" title="Film Fiesta - Popular"/>}
        />
        <Route
          path="/movies/upcoming"
          element={<MoviesPage apiPath="movie/upcoming" key="upcoming" title="Film Fiesta - Upcoming"/>}
        />
        <Route
          path="/movies/search"
          element={<SearchPage apiPath="search/movie" title="Search Results"/>}
        />
        <Route
          path="/movies/suggest"
          element={<WizardPage apiPath="genre/movie/list" title="Movie Suggestions"/>}
        />
        <Route
          path="/movies/suggest/result"
          element={<SuggestionsPage/>}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
