// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.VITE_APIKEY,
  // authDomain:import.meta.env.VITE_AUTHDOMAIN,
  // projectId:import.meta.env.VITE_PROJECTID,
  // storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  // appId:import.meta.env.VITE_APPID,
  apiKey: "AIzaSyBR527ebasn6mPwrp5sDH-MiN5oS1Y1-Ec",
  authDomain: "bistro-boss-9ac92.firebaseapp.com",
  projectId: "bistro-boss-9ac92",
  storageBucket: "bistro-boss-9ac92.appspot.com",
  messagingSenderId: "253611717911",
  appId: "1:253611717911:web:28999f605c2561bfd17352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth