import { initializeApp } from "firebase/app"

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyCGvF6k64ozbnDLPJINA4UmHTR5cdqhEO8",
  authDomain: "maya-jam-session.firebaseapp.com",
  projectId: "maya-jam-session",
  storageBucket: "maya-jam-session.firebasestorage.app",
  messagingSenderId: "1021590090124",
  appId: "1:1021590090124:web:91c35b1b7661d5062966a9"

}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)