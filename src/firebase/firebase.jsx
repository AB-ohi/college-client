// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyt7jd6oE8FxaV-W2MvDMxy9l6GFZlA0s",
  authDomain: "college-booking.firebaseapp.com",
  projectId: "college-booking",
  storageBucket: "college-booking.appspot.com",
  messagingSenderId: "648005811390",
  appId: "1:648005811390:web:74f5ad693d0bb9d902f2ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;