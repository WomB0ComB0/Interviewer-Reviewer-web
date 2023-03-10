import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFunctions, httpsCallable } from "firebase/functions";
import React, { useState, lazy, Suspense, useEffect } from "react";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import GoogleButton from "react-google-button";
// import { getDatabase, ref, set } from "firebase/database"; // import { getMessaging, getToken, onMessage } from "firebase/messaging"; // import { getPerformance } from "firebase/performance"; // import { getRemoteConfig, fetchConfig, activate } from "firebase/remote-config"; // import { getInstallations } from "firebase/installations";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import NotFound from '../../404'

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

const Offline = () => {
  return <h1>Welcome to the Offline page!</h1>;
};


const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(()=>{
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };

  },[])
  return (
    <>
      {!isOnline ? 
        <Offline/> :
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes> 
          </Router>
      }
    </>
  );
};
export default App;