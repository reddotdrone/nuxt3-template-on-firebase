import { getAuth } from "firebase/auth";

export const sign_out = (event: any, navigateTo: string = "/") => {

  const router = useRouter()
  getAuth()
  .signOut()
  .then(() => {    
    router.push(navigateTo)
  })
}