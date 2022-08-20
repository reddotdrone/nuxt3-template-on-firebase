import { getAuth, EmailAuthProvider } from "@firebase/auth";
import 'firebaseui/dist/firebaseui.css'

export const useFirebaseLogin = async (elem: string, callback: (authResult:any) => void) => {

  const firebaseui = await import("firebaseui");
  const auth = getAuth();
  const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
  const uiConfig: firebaseui.auth.Config = {
    callbacks: {
      signInSuccessWithAuthResult: (authResult) => {
        callback(authResult)
        return false;
      },
    },
    signInSuccessUrl : "http://localhost:3000/",
    signInOptions: [
      EmailAuthProvider.PROVIDER_ID,
    ],
    tosUrl: '',
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
  }
  ui.start(elem, uiConfig)
}