import { useDispatch } from "react-redux";
import { TRENDING_MOVIE_URL, options } from "../utils/constants";
import { useEffect } from "react";
import { addTrendingMovies } from "../utils/movieSlice";
const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const getTrendingMovies = async () => {
      const data = await fetch(TRENDING_MOVIE_URL,options);
      const json = await data.json();
      dispatch(addTrendingMovies(json.results));
    }
  
    useEffect( () => {
      getTrendingMovies();
    },[]);
}

export default useTrendingMovies;