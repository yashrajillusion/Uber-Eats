// import { initializeApp } from "firebase/app";
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC02_hdO043ziiIedAIMCz_XbkgvgYiOHc",
  authDomain: "yashrajillusion2.firebaseapp.com",
  databaseURL: "https://yashrajillusion2-default-rtdb.firebaseio.com",
  projectId: "yashrajillusion2",
  storageBucket: "yashrajillusion2.appspot.com",
  messagingSenderId: "1060282771238",
  appId: "1:1060282771238:web:73006581cd0bc3665643e7",
  measurementId: "G-PNY5NPWMZ2",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app(); // const app = initializeApp(firebaseConfig);
export default firebase;
