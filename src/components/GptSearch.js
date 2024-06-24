import React from 'react'
import GptSearchBar from './GptSearchBar';
import { BACKGROUND_IMG } from '../utils/constants';
import GptMovieSuggestion from './GptMovieSuggestion';

const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-20'>
      <img className='h-screen md:h-[100%] object-cover brightness-75' alt="bg-logo" src={BACKGROUND_IMG}></img>
      </div>
      <div className='w-full  justify-center mt-[34%] md:mt-0'>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
    </>
  )
}

export default GptSearch;
