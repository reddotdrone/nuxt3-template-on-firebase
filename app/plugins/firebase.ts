
import { initializeApp } from "firebase/app"
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"
import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged, connectAuthEmulator } from "firebase/auth";
import { connectStorageEmulator, getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your aplKey",
  authDomain: "your authDomain",
  projectId: "your projectId",
  storageBucket: "your storageBucket",
  messagingSenderId: "your messagingSenderId",
  appId: "your appId",
}

export default defineNuxtPlugin(nuxtApp => {

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app)
  const storage = getStorage(app);

  // Use emulators if needed
  // connectFirestoreEmulator(firestore, 'localhost', 8080);
  // connectAuthEmulator(getAuth(), "http://localhost:9099"); 
  // connectStorageEmulator(storage, "localhost", 9199)

  const auth = getAuth()
  setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('guest keeping state')
  })
  .catch((error) => {
    console.log('guest keeping state error: ', error.code, error.message)
  })

  return {
    provide: {
      firestore: firestore,
      storage: storage
    }
  }
})