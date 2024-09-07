import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDg4h_s_roDB_PI5DZ2jSPcv1kuPuxneBQ",
  authDomain: "first-next-project-1e8d7.firebaseapp.com",
  projectId: "first-next-project-1e8d7",
  storageBucket: "first-next-project-1e8d7.appspot.com",
  messagingSenderId: "623502899574",
  appId: "1:623502899574:web:783ce9677ca2a28e166257",
  measurementId: "G-904RMYV5WV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
