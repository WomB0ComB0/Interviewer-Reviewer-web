import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/analytics"

const app = firebase.initializeApp ({
    apiKey: process.env.VITE_INTERVIEWER_REVIEWER_WEB_FIREBASE_API_KEY,
    authDomain: process.env.VITE_INTERVIEWER_REVIEWER_WEB_FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.VITE_INTERVIEWER_REVIEWER_WEB_FIREBASE_DATABASE_URL,
    projectId: process.env.VITE_INTERVIEWER_REVIEWER_WEB_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VITE_INTERVIEWER_REVIEWER_WEB_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.VITE_INTERVIEWER_REVIEWER_WEB_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_INTERVIEWER_REVIEWER_WEB_FIREBASE_APP_ID,
    measurementId:process.env.VITE_INTERVIEWER_REVIEWER_WEB_FIREBASE_MEASUREMENT_ID
  });

export const auth = get.auth()
export const db = get.firestore()
export const analytics = get.analytics()
export default app