import React from "react";
import { useLocation } from "react-router-dom";

const ShowTrailer = () => {
  const location = useLocation();
  console.log(location.state.movie);

  return <div>Show Trailer</div>;
};

export default ShowTrailer;
