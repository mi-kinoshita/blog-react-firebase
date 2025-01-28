import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrx-7CZadKNTUbd9s7AsBzp2nj-pOUaUY",
  authDomain: "blog-with-react-d0b49.firebaseapp.com",
  projectId: "blog-with-react-d0b49",
  storageBucket: "blog-with-react-d0b49.firebasestorage.app",
  messagingSenderId: "197454665251",
  appId: "1:197454665251:web:6a1470f4ec00dfda778396",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
