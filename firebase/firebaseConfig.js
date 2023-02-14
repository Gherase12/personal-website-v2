// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   
    apiKey:process.env.API_KEY ,
  authDomain: "personal-website-e4a4a.firebaseapp.com",
  projectId: "personal-website-e4a4a",
  storageBucket: "personal-website-e4a4a.appspot.com",
  messagingSenderId: "514768914159",
  appId: "1:514768914159:web:d3a786d8d8cd3a17febd1a",
  measurementId: "G-HB3CDZYMK0" 
    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// const analytics = getAnalytics(app);