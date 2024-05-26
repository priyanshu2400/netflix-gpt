import React, { useRef } from 'react'
import lang from '../utils/languageConstantsts';
import { useSelector } from 'react-redux';
import {options} from "../utils/constants";
import { useDispatch } from 'react-redux';
import { addGptMoviesResult } from '../utils/gptSlice';
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const preferredLanguage = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",options);
    const json = await data.json();
    return json.results;
  }

  const handleGptSearchButtonClick = async () => {
    // const GptResult = await fetch("");
    const GptResult = "1920, Raaz, Ek Thi Daayan, Shaapit, Alone";
    const movieResult = GptResult.split(",");
    const promiseArray = movieResult.map((movie) => searchMoviesTMDB(movie));
    const TMDBResults = await Promise.all(promiseArray);
    dispatch(addGptMoviesResult({movieNames : movieResult ,movieResults: TMDBResults}));
  }
  return (
    <div className='rounded-sm w-full md:w-1/2 pt-[10%] m-auto'>
      <form className='grid p-1 grid-cols-12 bg-black bg-opacity-65 rounded-md' onSubmit={(e) => e.preventDefault()}> 
        <input ref={searchText}  className='p-2 m-2 col-span-9 md:col-span-10 rounded-sm font-bold' type="text" placeholder={lang[preferredLanguage].searchPlaceHolder}/>
        <button className="p-2 m-2 col-span-3 md:col-span-2 bg-red-600 rounded-sm text-white font-bold text-center hover:bg-red-700" onClick={handleGptSearchButtonClick}>{lang[preferredLanguage].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;
