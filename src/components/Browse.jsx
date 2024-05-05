import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../hooks/usePopularMovies copy";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  // const showGPTSearch = useSelector((store) => store.gptSearch.showGPTSearch);

  // useNowPlayingMovies();
  // usePopularMovies();
  // useTopRatedMovies();
  // useUpcomingMovies();

  return (
    <div>
      <Header />
      {/* {showGPTSearch && showGPTSearch ? <GPTSearch /> : <MainContainer />} */}
      {/* <MainContainer /> */}
      <div className="apology">
        <h2>We appologize but TMDB is down right now please come back later</h2>
      </div>
    </div>
  );
};

export default Browse;
