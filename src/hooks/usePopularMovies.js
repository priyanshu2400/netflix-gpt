import { useDispatch } from "react-redux";
import { POPULAR_MOVIE_URL, options } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
      const data = await fetch(POPULAR_MOVIE_URL,options);
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    }
  
    useEffect( () => {
      getPopularMovies();
    },[]);
}

export default usePopularMovies;