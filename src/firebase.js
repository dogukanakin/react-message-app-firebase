// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC-yP0jpshKlAfTJCQzpSjc2L1PZ-FyvGo',
  authDomain: 'chat-app-4776a.firebaseapp.com',
  projectId: 'chat-app-4776a',
  storageBucket: 'chat-app-4776a.appspot.com',
  messagingSenderId: '770625017386',
  appId: '1:770625017386:web:8691f4025f9d21599c9553'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
