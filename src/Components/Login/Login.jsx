// import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.init";

const provider = new GoogleAuthProvider();
const Login = () => {
    const handleGoogleSingIn = () => {
        signInWithPopup(auth, provider)
        .then(res => {
            console.log(res.user)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="w-3xl mx-auto bg-gray-500">
            <h1 className="text-center text-2xl bg-gray-300 py-4 rounded-xl">This is login page</h1>
            <div></div>
            <button onClick={() => handleGoogleSingIn()} className=" text-center">Sign in with google</button>
        </div>
    );
};

export default Login;