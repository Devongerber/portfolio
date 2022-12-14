// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBympQxLyOEnbE3TTTEyK4KvlZGIf6DoEw",
  authDomain: "nalapod-19718.firebaseapp.com",
  databaseURL: "https://nalapod-19718-default-rtdb.firebaseio.com",
  projectId: "nalapod-19718",
  storageBucket: "nalapod-19718.appspot.com",
  messagingSenderId: "489162111241",
  appId: "1:489162111241:web:b63d4a377786d24cd7fbd8",
  measurementId: "G-VZV1V55HCH"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);