import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element : <Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"",
            element : <Login/>
        }
    ])

onAuthStateChanged(auth, (user) => {
  if (user) {
    //user signed in 
    const {uid,displayName,email} = user;
    //to Update the redux store we are using dispatch action
    dispatch(addUser(
        {uid:uid, displayName:displayName, email : email}
    ));
  } 
  else {
    // User is signed out
    dispatch(removeUser());
  }
});
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;
