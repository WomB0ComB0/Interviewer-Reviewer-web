import React from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import GoogleButton from 'react-google-button';
// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const firebaseConfig = {
  apiKey: "AIzaSyCt0sEUcmwMZAQS5MIzboK-N74iLtR0y1I",
  authDomain: "interviewer-reviewer-477c0.firebaseapp.com",
  databaseURL: "https://interviewer-reviewer-477c0-default-rtdb.firebaseio.com",
  projectId: "interviewer-reviewer-477c0",
  storageBucket: "interviewer-reviewer-477c0.appspot.com",
  messagingSenderId: "447937462786",
  appId: "1:447937462786:web:8cff412ac13e4b188e9d1b",
  measurementId: "G-12EBS82ELB"
};

const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth();
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
  console.log({ENV_VAR: import.meta.env.VITE_API_KEY})
}

export default App;