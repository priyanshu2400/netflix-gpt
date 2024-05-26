import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
  return (
    <div className='bg-black'>
        <div className="relative md:-mt-48">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Popular"} movies={movies.popularMovies}/>
            <MovieList title={"Top Rated"} movies={movies.trendingMovies}/>
            <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer
