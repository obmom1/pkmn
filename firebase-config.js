// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm_dxF6SBnLatSJxdPks789QgwbpGUFE8",
  authDomain: "pkmn-b0c81.firebaseapp.com",
  projectId: "pkmn-b0c81",
  storageBucket: "pkmn-b0c81.firebasestorage.app",
  messagingSenderId: "1051143846791",
  appId: "1:1051143846791:web:6023fc789fae96057cb122"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
