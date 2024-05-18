import React from 'react'
import lang from '../utils/languageConstantsts';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const preferredLanguage = useSelector((store) => store.config.language);
  return (
    <div className='rounded-sm w-1/2 pt-[10%] '>
      <form className='grid p-1 grid-cols-12 bg-black bg-opacity-65 rounded-md'>
        <input className='p-2 m-2 col-span-10 rounded-sm font-bold' type="text" placeholder={lang[preferredLanguage].searchPlaceHolder}/>
        <button className="p-2 m-2 col-span-2 bg-red-600 rounded-sm text-white font-bold text-center cursor-pointer hover:bg-red-700">{lang[preferredLanguage].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;
