import { initializeApp } from "firebase/app";
import { getAuth }from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0jMg4Anknr8bzFluH0pEpnwz8l3AO1jo",
  authDomain: "clone-91020.firebaseapp.com",
  projectId: "clone-91020",
  storageBucket: "clone-91020.appspot.com",
  messagingSenderId: "278770755209",
  appId: "1:278770755209:web:c09da66f3a2841b3dec858"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)