import React from 'react'
import GptSearchBar from './GptSearchBar';
import { BACKGROUND_IMG } from '../utils/constants';

const GptSearch = () => {
  return (
    <div className='w-full flex justify-center'>
      <img className='absolute -z-20 brightness-75' alt="bg-logo" src={BACKGROUND_IMG}></img>
      <GptSearchBar/>
    </div>
  )
}

export default GptSearch;
