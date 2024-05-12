import { useDispatch } from "react-redux";
import { UPCOMING_MOVIE_URL, options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
      const data = await fetch(UPCOMING_MOVIE_URL,options);
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    }
  
    useEffect( () => {
      getUpcomingMovies();
    },[]);
}

export default useUpcomingMovies;