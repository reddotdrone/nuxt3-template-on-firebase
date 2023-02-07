import { getAuth } from "firebase/auth";

export const isLoggedIn = () => {
  const user = getAuth().currentUser
  return !(user == null)
}

export const signOut = (callback: () => void) => {
  getAuth()
  .signOut()
  .then(callback)
}