import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, USER_LOGO } from '../utils/constants';
import { toggleViewSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from '../utils/languageConstantsts';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const user = useSelector((store) => store.user)
  const viewGptSearch = useSelector(store => store.gpt.viewSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      //no need to navigate from here since it is already been taken care inside the onAuthStateChanged api
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //user signed in 
        const {uid,displayName,email} = user;
        //to Update the redux store we are using dispatch action
        dispatch(addUser(
            {uid:uid, displayName:displayName, email : email}
        ));
        navigate("/browse");
      } 
      else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //remove the observer "onAuthStateChanged" when the component unmounts.
    return () => unsubscribe();
  },[])

  const handleToggleGptSearch = () => {
    dispatch(toggleViewSearch());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="flex flex-col justify-between fixed w-full bg-gradient-to-b from-black z-20 items-center md:flex-row ">
      <img className="w-44" src={LOGO_URL}
      alt="logo"></img>
      {user && <div className='p-4 z-30 flex'>
          { viewGptSearch && <select className='mx-4 p-2 bg-gray-600 text-white font-bold rounded-sm' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}

          <button className='mx-4 p-2 bg-cyan-800 text-white font-bold rounded-sm hover:bg-cyan-600'
          onClick={handleToggleGptSearch}>{viewGptSearch ? "Homepage" : "Search"}</button>

          <img className="w-10 h-10 rounded-sm"alt="userlogo" src={USER_LOGO}></img>

          <button className='text-white font-bold m-2 hover:text-gray-200'
          onClick={handleSignOut}> Sign Out</button>
        </div>}
    </div>
  )
} 

export default Header
