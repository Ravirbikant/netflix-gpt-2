import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mt-4">
      <p className="movie-list-titles">{title}</p>
      <div className="d-flex movie-list-div">
        {movies &&
          movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              movie={movie}
            />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
