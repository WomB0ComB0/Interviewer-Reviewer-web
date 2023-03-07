import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFunctions, httpsCallable } from "firebase/functions";
import React, { useState, lazy, Suspense } from 'react';
import { getStorage } from "firebase/storage";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import GoogleButton from 'react-google-button';
// import { getDatabase, ref, set } from "firebase/database"; // import { getMessaging, getToken, onMessage } from "firebase/messaging"; // import { getPerformance } from "firebase/performance"; // import { getRemoteConfig, fetchConfig, activate } from "firebase/remote-config"; // import { getInstallations } from "firebase/installations";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingBar from "react-top-loading-bar";

const provider = new GoogleAuthProvider();

const Home = () => {
  return <h1>Welcome to the Home page!</h1>;
};

const About = () => {
  return <h1>Welcome to the About page!</h1>;
};

const Contact = () => {
  return <h1>Welcome to the Contact page!</h1>;
};

const NotFound = () => {
  return <h1>404.. This page is not found!</h1>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </Router>
  );
};

const App = () => {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmailError, setUserEmailError] = useState('');
  const [userPasswordError, setUserPasswordError] = useState('');
  const [userHasAccount, setUserHasAccount] = useState(false);
  return (
    <div>
      {/* <LoadingBar></LoadingBar> */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;