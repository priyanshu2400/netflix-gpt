import React from 'react'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-40 m-3'>
      <img className="rounded-sm" alt="movie-logo"
      src={"https://image.tmdb.org/t/p/w500"+poster_path}></img>
    </div>
  )
}

export default MovieCard;