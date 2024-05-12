import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_IMG } from '../utils/constants';
const Login = () => {
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();
    const [isSignIn,setIsSignIn] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);

    const handleButtonClick = () => {
        const nameValue = (name.current === null) ? null : name.current.value;
        const emailValue = (email.current === null) ? null : email.current.value;
        const passwordValue = (password.current === null) ? null : password.current.value;
        const message = validateData(nameValue,emailValue,passwordValue,isSignIn);
        setErrorMessage(message);

        if(message) return;

        if(!isSignIn){
            //Sign Up logic
            createUserWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                displayName: nameValue
                })
                .then(() => {
                    // Profile updated!
                    const {uid,displayName,email} = auth.currentUser;
                    //here we are using dispatch just to update the displayName
                    dispatch(addUser(
                        {uid:uid, displayName:displayName, email : email}
                    ));
                })
                .catch((error) => {
                // An error occurred
                });
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setErrorMessage("Something Went Wrong...try again");
            });
        }
        else{
            signInWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setErrorMessage("User Doesnt exist...try Signing up");
            });
        }
    }
    const toggleSignIn = () => {
        setErrorMessage(null);
        setIsSignIn(!isSignIn);
    }
    return (
        <div>
            <Header/>
            <div className='absolute'>
                <img src={BACKGROUND_IMG}
                alt="background-img"></img>
            </div>

            <form onSubmit={(e) => e.preventDefault()} 
            className='absolute p-8 w-1/3 bg-black top-24 left-1/3 flex flex-col text-white rounded-md bg-opacity-85'>
                <h2 className='mx-2 my-3 p-2 text-3xl font-bold '>{ isSignIn ? "Sign In" : "Sign Up"}</h2>
                {
                    !isSignIn && <input ref={name} className='mx-2 my-3 p-2  bg-black bg-opacity-10 border border-white rounded-md' type="text" placeholder='Full Name'/>
                }            
                <input ref={email} className='mx-2 my-3 p-2  bg-black bg-opacity-10 border border-white rounded-md' type="text" placeholder='Email'/>
                <input ref={password} className='mx-2 my-3 p-2  bg-black bg-opacity-10 border border-white rounded-md' type="password" placeholder='Password'/>
                <p className='mx-2 text-red-600 font-bold' >{errorMessage}</p>
                <button className='mx-2 my-5 p-2 bg-red-700 rounded-md hover:bg-red-800'
                onClick={handleButtonClick}>
                    { isSignIn ? "Sign In" : "Sign Up"}
                </button>
                <div className=' mb-5 p-2'>
                    <span className=''>{ isSignIn ? "New to Netflix? " : "Already Signed In? " }</span>
                    <span className='font-bold cursor-pointer hover:underline' onClick={toggleSignIn}>{ isSignIn ? "Sign Up" : "Sign In" }</span>
                </div>
            </form>
        </div>
    )
}

export default Login
