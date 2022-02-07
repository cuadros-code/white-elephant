import { useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile, UserCredential } from "firebase/auth";
import { auth, googleProvider } from "src/config/firebaseConfig";
import { useStoreAuth } from '../store/authStore';

const useAuth = () => {

  const authStore = useStoreAuth( auth => auth );
  const [loadAuthenticate, setloadAuthenticate] = useState(false);

  const createUser = async ( fullName: string, email: string, password: string ) => {
    try {
      setloadAuthenticate(true)
      const user = auth.currentUser
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      user && await updateProfile(user, { displayName: fullName })

      if(user && userCredential.user) {
        registerInStore(userCredential)
      }

    } catch (error) {
      
    } finally {
      setloadAuthenticate(false)
    }
  }

  const signInWithEmail = async ( email: string, password: string ) => {
    try {
      setloadAuthenticate(true)
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if(userCredential && userCredential.user) {
        registerInStore(userCredential)
      }
    } catch (error) {
      
    } finally {
      setloadAuthenticate(false)
    }

  }

  const authenticateWithGoogle = async () => {
    try {
      setloadAuthenticate(true)
      const dataResult = await signInWithPopup(auth, googleProvider)
      const credential = GoogleAuthProvider.credentialFromResult(dataResult);

      if(credential && dataResult.user) {
        registerInStore(dataResult)
      }

    } catch (error) {
      
    } finally {
      setloadAuthenticate(false)
    }
  }

  const registerInStore = ( credential: UserCredential ) => {
    authStore.setUser({
      id    : credential.user.uid,
      name  : credential.user.displayName!,
      email : credential.user.email!,
      token : credential.user.uid!
    })
  }


  return {
    createUser,
    authenticateWithGoogle,
    signInWithEmail,
    loadAuthenticate
  }
};

export default useAuth;
