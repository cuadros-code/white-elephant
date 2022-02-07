import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "src/config/firebaseConfig";
import { useStoreAuth } from '../store/authStore';

const useAuth = () => {

  const authStore = useStoreAuth( auth => auth );

  const createUser = async ( fullName: string, email: string, password: string ) => {
    try {
      const user = auth.currentUser;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      user && await updateProfile(user, { displayName: fullName })

      if(user && userCredential.user) {
        debugger;
        authStore.setUser({
          id    : userCredential.user.uid,
          name  : userCredential.user.displayName!,
          email : userCredential.user.email!,
          token : user.uid!
        })
      }

    } catch (error) {
      
    }
  }

  return {
    createUser
  }
};

export default useAuth;
