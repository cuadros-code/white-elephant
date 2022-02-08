import { useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  updateProfile, 
  UserCredential,
  signOut, 
  onAuthStateChanged,
  User} from "firebase/auth";
import { auth, googleProvider } from "src/config/firebaseConfig";
import { useStoreAuth } from '../store/authStore';
import { formatErrorMessage } from '../utils/formatErrorMessage';
import { AuthError } from "src/interfaces/IAuthError";
import { useMessageError } from '../store/messageStore';
import { useRouter } from 'next/router';

// this hook contains all the logic to handle the authentication
const useAuth = () => {

  const router = useRouter();
  const authStore = useStoreAuth( auth => auth );
  const message = useMessageError( state => state );
  const [loadAuthenticate, setloadAuthenticate] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged( auth ,(user) => {
      if (user) {
        router.push('/dashboard');
        onStateChange(user)
      } else {
        authStore.setClearUser();
      }
    });
    return () => unsubscribe();
  }, []);

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
      const err = error as AuthError
      const code = formatErrorMessage(err.code)
      showMessageError(code)
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
      const err = error as AuthError
      const code = formatErrorMessage(err.code)
      showMessageError(code)
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
      const err = error as AuthError
      const code = formatErrorMessage(err.code)
      showMessageError(code)
    } finally {
      setloadAuthenticate(false)
    }
  }

  const closeSession = async () => {
    try {
      setloadAuthenticate(true)
      await signOut(auth)
      authStore.setClearUser()
    } catch (error) {
      const err = error as AuthError
      const code = formatErrorMessage(err.code)
      showMessageError(code)
    } finally {
      setloadAuthenticate(false)
    }
  };
  

  const registerInStore = ( credential: UserCredential ) => {
    authStore.setUser({
      id    : credential.user.uid,
      name  : credential.user.displayName!,
      email : credential.user.email!,
      token : credential.user.uid!
    })
    authStore.setIsLoggedIn(true)
  }

  const onStateChange = ( user: User ) => {
    authStore.setUser({
      id    : user.uid,
      name  : user.displayName!,
      email : user.email!,
      token : user.uid!
    })
    authStore.setIsLoggedIn(true)
  }



  const showMessageError = ( text: string ) => {
    message.setError({
      error: true,
      message: text,
      type: 'error'
    })
  }


  return {
    createUser,
    authenticateWithGoogle,
    signInWithEmail,
    closeSession,
    loadAuthenticate
  }
};

export default useAuth;
