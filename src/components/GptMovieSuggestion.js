import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
const GptMovieSuggestion = () => {
    const {gptMovies, gptMovieNames} = useSelector(store => store.gpt)
  return (
    <div className='text-white bg-black bg-opacity-60'>
        {
            gptMovieNames?.map( (movieName,index) => 
                <MovieList key={movieName} title={movieName} movies={gptMovies[index]}/>
            )
        }
    </div>
  )
}

export default GptMovieSuggestion