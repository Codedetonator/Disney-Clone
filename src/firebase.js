import firebase from "firebase/app";
import "firebase/auth"; // for authentication

const firebaseConfig = {
  apiKey: "AIzaSyBG4NQtnH4-yQwwWdd-iNb5UpbKrpCPG2s",
  authDomain: "dsineyplus-f0198.firebaseapp.com",
  projectId: "dsineyplus-f0198",
  storageBucket: "dsineyplus-f0198.appspot.com",
  messagingSenderId: "72901485774",
  appId: "1:72901485774:web:b1dfb31fb9be7660a45c9f",
  measurementId: "G-Z537NL2HKF",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default firebase;

