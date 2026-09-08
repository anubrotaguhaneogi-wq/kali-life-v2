// Authentication & Session Management
import { auth } from './firebase.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// ইউজার লগইন আছে কিনা চেক করা
export function checkAuth(onLoggedIn, onLoggedOut) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (onLoggedIn) onLoggedIn(user);
        } else {
            if (onLoggedOut) {
                onLoggedOut();
            } else {
                // যদি লগইন করা না থাকে, তবে লগইন পেজে পাঠিয়ে দেবে
                if (!window.location.href.includes('login.html')) {
                    window.location.href = 'login.html';
                }
            }
        }
    });
}

// লগআউট করার ফাংশন
export function logoutUser() {
    signOut(auth).then(() => {
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error("Logout Error: ", error);
    });
}
