
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC36BDwkZoB6d1rhNlJrOYCWa8iK8DtCxI",
  authDomain: "fsd--clone.firebaseapp.com",
  projectId: "fsd--clone",
  storageBucket: "fsd--clone.appspot.com",
  messagingSenderId: "72239066200",
  appId: "1:72239066200:web:5a67474b0b3aae235aee2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)