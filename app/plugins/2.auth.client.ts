
import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged } from "firebase/auth";

export default defineNuxtPlugin(async nuxtApp => {

  const auth = getAuth()
  setPersistence(auth, browserLocalPersistence)
  .then(() => {
    //console.log('guest keeping state')
  })
  .catch((error) => {
    //console.log('guest keeping state error: ', error.code, error.message)
  })

  onAuthStateChanged(auth, async authUser => {
    // do something here
  })
})