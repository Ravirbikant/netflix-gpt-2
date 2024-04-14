import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div style={{ marginLeft: "40px" }}>
      <MovieList title="Now PLaying" movies={movies.nowPlayingMovies} />
      <MovieList title="Top Rated" movies={movies.topRatedMovies} />
      <MovieList title="Popular" movies={movies.popularMovies} />
      <MovieList title="Upcoming" movies={movies.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
