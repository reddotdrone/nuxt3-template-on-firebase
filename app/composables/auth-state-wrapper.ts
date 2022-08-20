import { getAuth, onAuthStateChanged, User } from "firebase/auth";

export const authStateWrapper = (callback: (user?: User) => {}) => {

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user)
      callback(user)
    } else {
      console.log("Not registered")
      callback()
    }
  })
}
