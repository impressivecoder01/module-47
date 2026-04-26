// import React from 'react';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const Login = () => {
    const handleGoogleSingIn = () => {
        console.log('gooogle ')
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