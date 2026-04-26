// import React from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";

const provider = new GoogleAuthProvider();
const Login = () => {
  const [user, setUser] = useState(null);
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
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
  return (
    <div className="w-3xl mx-auto bg-gray-500">
      <h1 className="text-center text-2xl bg-gray-300 py-4 rounded-xl">
        This is login page
      </h1>
      {
        user ?  <button className="" onClick={()=> handleGoogleSignOut()}>Sign Out</button> : <button onClick={() => handleGoogleSingIn()} className=" text-center text-white">
        Sign in with google
      </button>
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
