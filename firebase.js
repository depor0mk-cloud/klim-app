import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC6Ticcyl0p-zas2cecR2D_e8Ocp4qgrwc",
  authDomain: "klim-74f9f.firebaseapp.com",
  databaseURL: "https://klim-74f9f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "klim-74f9f",
  storageBucket: "klim-74f9f.firebasestorage.app",
  messagingSenderId: "168453917755",
  appId: "1:168453917755:web:62b2e31b895485a4bd601e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
