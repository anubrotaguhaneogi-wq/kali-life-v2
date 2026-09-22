// Firebase Configuration & Initialization

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "এখানে_তোমার_API_KEY",
  authDomain: "এখানে_তোমার_AUTH_DOMAIN",
  projectId: "এখানে_তোমার_PROJECT_ID",
  storageBucket: "এখানে_তোমার_STORAGE_BUCKET",
  messagingSenderId: "এখানে_তোমার_MESSAGING_SENDER_ID",
  appId: "এখানে_তোমার_APP_ID",
  measurementId: "এখানে_তোমার_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
