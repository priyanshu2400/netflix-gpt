import React from 'react'

const MovieTitle = ({title,overview}) => {
  return (
    <div className='w-full aspect-video relative z-10 text-white bg-gradient-to-r from-black'>
        <div className='w-1/3 absolute top-1/4 left-5'>
            <h1 className=' my-2 md:text-3xl font-bold'>{title}</h1>
            <p className='hidden md:inline-block'>{overview}</p>
            <div className='mt-4'>
                <button className='px-4 py-0 md:px-10 md:py-2 bg-red-600 mr-3 md:font-bold rounded-sm text-white hover:bg-opacity-80'>PLAY</button>
                <button className='hidden md:inline px-10 py-2 bg-gray-300 mr-3 font-bold rounded-sm text-white bg-opacity-20 hover:bg-opacity-30'>+ MY LIST</button>
            </div>
        </div>
    </div>
  )
}

export default MovieTitle;
