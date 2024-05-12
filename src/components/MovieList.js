import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className='text-white relative z-10'>
      <h1 className='text-2xl px-4'>{title}</h1>
      <div className='flex overflow-x-scroll [&::-webkit-scrollbar]:hidden'>
        <div className='flex'>
            {
                movies?.map((movie) => 
                <MovieCard key={movie.id} poster_path = {movie.poster_path}/>)
            }
        </div>
      </div>
    </div>
  )
}

export default MovieList
