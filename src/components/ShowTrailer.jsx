import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";

const ShowTrailer = () => {
  const location = useLocation();
  const selectedMovie = location.state.movie;
  const [trailerKey, setTrailerKey] = useState();

  async function getSelectedTrailer() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${selectedMovie.id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    setTrailerKey(trailer.key);
  }

  useEffect(() => {
    getSelectedTrailer();
  }, []);

  return (
    <div>
      {trailerKey && (
        <iframe
          src={
            "https://www.youtube.com/embed/" +
            trailerKey +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
};

export default ShowTrailer;
