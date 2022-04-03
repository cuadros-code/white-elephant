import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey            : process.env.NEXT_PUBLIC_API_KEY,
  authDomain        : process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId         : process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket     : process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId : process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId             : process.env.NEXT_PUBLIC_APP_ID,
  measurementId     : process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

const app = getApps().length === 0 
              ? initializeApp(firebaseConfig) 
              : getApp();

const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

const storage = getStorage(app);
const imagesRef = ref(storage, 'images/');
const db = getFirestore();

export {
  app,
  auth,
  storage,
  db,
  googleProvider,
  imagesRef,
}
