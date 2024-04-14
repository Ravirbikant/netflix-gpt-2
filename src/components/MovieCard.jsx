import React from "react";
import { IMG_CDN } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath, movie }) => {
  const navigate = useNavigate();

  return (
    <div
      className="position-relative"
      onClick={() => {
        navigate("/showTrailer", { state: { movie: movie } });
      }}
    >
      <img
        className="movie-card-poster"
        alt="Movie Card"
        src={IMG_CDN + posterPath}
      />
    </div>
  );
};

export default MovieCard;
