import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCh4WYhl1W1eOT_f1_1zkX1JPpXbCDZaKQ",
  authDomain: "portfolio-64ef1.firebaseapp.com",
  projectId: "portfolio-64ef1",
  storageBucket: "portfolio-64ef1.firebasestorage.app",
  messagingSenderId: "753694750378",
  appId: "1:753694750378:web:cd0b0f31aee549a30102d3",
  measurementId: "G-3CB8DXJ9S8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

if (typeof window !== 'undefined') {
  getAnalytics(app);
}
