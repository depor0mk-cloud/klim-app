import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  onChildAdded,
  query,
  orderByChild,
  limitToLast,
  serverTimestamp,
  get
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// ⚠️ ТВОИ РОДНЫЕ КЛЮЧИ — ВСЁ ЧЕСТНО, НЕ ПИЗЖУ!
const firebaseConfig = {
  apiKey: "AIzaSyC6Ticcyl0p-zas2cecR2D_e8Ocp4qgrwc",
  authDomain: "klim-74f9f.firebaseapp.com",
  databaseURL: "https://klim-74f9f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "klim-74f9f",
  storageBucket: "klim-74f9f.firebasestorage.app",
  messagingSenderId: "168453917755",
  appId: "1:168453917755:web:62b2e31b895485a4bd601e",
  measurementId: "G-1N6X0JLNHH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
