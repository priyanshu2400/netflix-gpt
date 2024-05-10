import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    console.log("inside login page");
  const [isSignIn,setIsSignIn] = useState(true);   
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="background-img"></img>
        </div>
        <form className='absolute p-8 w-1/3 bg-black top-24 left-1/3 flex flex-col text-white rounded-md bg-opacity-85'>
            <h2 className='mx-2 my-3 p-2 text-3xl font-bold '>{ isSignIn ? "Sign In" : "Sign Up"}</h2>
            {
                !isSignIn && <input className='mx-2 my-3 p-2  bg-black bg-opacity-10 border border-white rounded-md' type="text" placeholder='Name'/>
            }            
            <input className='mx-2 my-3 p-2  bg-black bg-opacity-10 border border-white rounded-md' type="text" placeholder='Email'/>
            <input className='mx-2 my-3 p-2  bg-black bg-opacity-10 border border-white rounded-md' type="password" placeholder='Password'/>
            <button className='mx-2 my-5 p-2 bg-red-700 rounded-md hover:bg-red-800'>
                { isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <div className=' mb-5 p-2'>
                <span className=''>{ isSignIn ? "New to Netflix? " : "Already Signed In? " }</span>
                <span className='  cursor-pointer hover:underline' onClick={toggleSignIn}>{ isSignIn ? "Sign Up" : "Sign In" }</span>
            </div>
        </form>
    </div>
  )
}

export default Login
