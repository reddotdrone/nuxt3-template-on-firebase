import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getAnalytics } from 'firebase/analytics'

export default defineNuxtPlugin(nuxtApp => {

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "your aplKey",
    authDomain: "your authDomain",
    projectId: "your projectId",
    storageBucket: "your storageBucket",
    messagingSenderId: "your messagingSenderId",
    appId: "your appId",
    measurementId: "your measurementId"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const firestore = getFirestore(app)
  const storage = getStorage(app)
  const analytics = getAnalytics(app)

  // Use emulators if needed
  // connectFirestoreEmulator(firestore, 'localhost', 8080);
  // connectAuthEmulator(getAuth(), "http://localhost:9099"); 
  // connectStorageEmulator(storage, "localhost", 9199)

  return {
    provide: {
      firestore: firestore,
      storage: storage,
      analytics: analytics
    }
  }
})