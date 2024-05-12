import React from 'react'
import MovieBackground from './MovieBackground'
import MovieTitle from './MovieTitle'
import { useSelector } from 'react-redux'

const HeroContainer = () => {
    const movies = useSelector((store) => store?.movies?.nowPlayingMovies)
    //early return 
    if(movies === null) return;
    const {original_title,overview,id} = movies[0];
  return (
    <div className='z-40 w-full'>
        <MovieBackground movieId = {id}/>
        <MovieTitle title={original_title} overview={overview}/>
    </div>
  )
}

export default HeroContainer
