import React from 'react';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const MovieBackground = ({movieId}) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className=' w-full aspect-video absolute'>
      <iframe className='w-full aspect-video'
       src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1&loop=1&playlist="+trailerVideo?.key}
       title="YouTube video player" allow="accelerometer; clipboard-write; 

       encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
       ></iframe>
    </div>
  )
}
export default MovieBackground;
