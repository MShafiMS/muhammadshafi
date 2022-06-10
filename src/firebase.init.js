// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChy4a3Fu4bbxcfiWAH9DEgbL9sEa22m1w",
  authDomain: "ms-muhammadshafi.firebaseapp.com",
  projectId: "ms-muhammadshafi",
  storageBucket: "ms-muhammadshafi.appspot.com",
  messagingSenderId: "952273060124",
  appId: "1:952273060124:web:eaf61f061876179167fad9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;