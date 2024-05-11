import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
const Header = () => {
  const user = useSelector((store) => store.user)
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (
    <div className=" flex justify-between absolute w-full bg-gradient-to-b from-black z-20">
      <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="logo"></img>
      {user && <div className='p-4 z-30 flex'>
          <img className="w-10 h-10 rounded-sm"alt="userlogo" src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"></img>
          <button className='text-white font-bold m-2 hover:text-gray-200'
          onClick={handleSignOut}> Sign Out</button>
        </div>}
    </div>
  )
}

export default Header
