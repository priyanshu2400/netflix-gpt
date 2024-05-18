import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const MovieData = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",options);
        const json = await data.json();
        const videos = json.results;
        const trailerVideos = videos?.filter((video) => (video.type === "Clip"));
        const trailer = trailerVideos ? trailerVideos[0] : videos[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        MovieData();
    },[]);
}

export default useMovieTrailer;
