import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAPqUmzheoC-alb6EcaVszNRBmAA-W-xOQ",
  authDomain: "linkedin-clone-madhavi.firebaseapp.com",
  projectId: "linkedin-clone-madhavi",
  storageBucket: "linkedin-clone-madhavi.appspot.com",
  messagingSenderId: "451378150287",
  appId: "1:451378150287:web:01a2508901b421737529fa",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
