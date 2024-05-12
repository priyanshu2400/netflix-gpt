import { useDispatch } from "react-redux";
import { MOVIE_URL, options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch(MOVIE_URL,options);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    }
  
    useEffect( () => {
      getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;