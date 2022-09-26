// Import the functions you need from the SDKs you need
import { getAutoHeightDuration } from "@mui/material/styles/createTransitions";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAus_0g_uYRhQ3pUWuPpfmcupUt0-SDkFs",
  authDomain: "shopily-431a7.firebaseapp.com",
  projectId: "shopily-431a7",
  storageBucket: "shopily-431a7.appspot.com",
  messagingSenderId: "1085204745000",
  appId: "1:1085204745000:web:1d8b325e76b75a979c5e1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      window.location = "/";
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

export const signOutFromApp = () =>
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      window.location = "/#/sign-in-sign-up";
    })
    .catch((error) => {
      // An error happened.
    });
