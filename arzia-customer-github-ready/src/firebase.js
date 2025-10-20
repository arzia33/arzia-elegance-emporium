import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBlKFaYIxXmtJ0B4p_K89dPAHLA5WFZa-8",
  authDomain: "arzia-elegance-emporium.firebaseapp.com",
  projectId: "arzia-elegance-emporium",
  storageBucket: "arzia-elegance-emporium.firebasestorage.app",
  messagingSenderId: "573625149258",
  appId: "1:573625149258:web:8fa93726ce9776a0e3c3b3",
  measurementId: "G-8YJ4RPPTRR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);