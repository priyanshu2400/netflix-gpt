import React from 'react'

const MovieCard = ({poster_path}) => {
  if(!poster_path) return null;
  return (
    <div className='w-28 md:w-40 m-2 md:m-3'>
      <img className="rounded-sm" alt="movie-logo"
      src={"https://image.tmdb.org/t/p/w500"+poster_path}></img>
    </div>
  )
}

export default MovieCard;