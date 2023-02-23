// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb4wJEurOIbWGgi_Ho0ZjOxvH_SRic94o",
  authDomain: "vue-fire-auth-yt-ab71c.firebaseapp.com",
  projectId: "vue-fire-auth-yt-ab71c",
  storageBucket: "vue-fire-auth-yt-ab71c.appspot.com",
  messagingSenderId: "533942037864",
  appId: "1:533942037864:web:f202cec841d86afb5f3add"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export {auth};