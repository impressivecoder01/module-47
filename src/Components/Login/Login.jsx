// import React from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";

const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider()
gitProvider.addScope('user:email');
const Login = () => {
  const [user, setUser] = useState(null);
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
        console.log(res.user)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleGoogleSignOut = () => {
    signOut(auth)
    .then(alert('Singed Out'))
    .catch(err => console.log(err))
    setUser(null)
  }
  const singInWithGithub = () => {
    signInWithPopup(auth, gitProvider)
    .then(res => {
      setUser(res.user)
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="w-3xl mx-auto bg-gray-500">
      <h1 className="text-center text-2xl bg-gray-300 py-4 rounded-xl">
        This is login page
      </h1>
      {
        user ?  <button className="" onClick={()=> handleGoogleSignOut()}>Sign Out</button> 
        : 
       <>
       <button className="text-2xl text-white" onClick={()=> handleGoogleSingIn()}>Sign in with google</button>
       <button className="text-2xl text-gray-700 bg-amber-200 ml-4" onClick={() => singInWithGithub()}>Sign in with github</button>
       </>
      }
      { user &&
        <div className="text-white">
          <h1>{user.displayName}</h1>
          <h1>{user.email}</h1>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </div>
  );
};

export default Login;
