import { useDispatch, useSelector } from "react-redux";
import { MOVIE_URL, options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch(MOVIE_URL,options);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    }
  
    useEffect( () => {
      !nowPlayingMovies && getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;