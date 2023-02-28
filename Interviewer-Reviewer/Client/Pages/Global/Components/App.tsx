import React, { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFunctions, httpsCallable } from "firebase/functions";
import { getStorage } from "firebase/storage";

import { getFirestore, collection, getDocs } from "firebase/firestore";
import GoogleButton from 'react-google-button';


// function App () {
//   const [count, setCount] = useState(0)
const provider = new GoogleAuthProvider();

const App = () => {
    
  function loginwithgoogle() {
    try {
      signInWithPopup(auth, provider);
    }
    catch (error) {
      console.log(error);
    }
  }
  
  function handleSubmit(e): void {
    const email = e.target[0].value;
    const password = e.target[1].value;
    createUserWithEmailAndPassword(auth, email,password)
      .then(user => console.log(user))
      .catch(error => console.log(error));
  }
  // autocomplete="new-password"
  return (
    <>
      <form autoComplete='' onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label><br/>
        <input autoFocus required type="email" name="email" id="email"  placeholder="Email"/><br/>
        <label htmlFor="password">Password</label><br/>
        <input maxLength={16} minLength={8} required type="password" name="password" id="password"  placeholder="Password"/><br/>
        <button type="submit" >Submit</button>
        <input type="reset">Clear</input>
      </form>
      <GoogleButton onClick={loginwithgoogle}/>
    </>
  );
}

export default App;