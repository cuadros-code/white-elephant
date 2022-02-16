import { useRouter } from "next/router"
import { useEffect } from "react"
import { useStoreAuth } from "src/store/authStore"

type TypeProtected = 'private' | 'public'

const useProtected = ( redirect: string, type: TypeProtected ) => {

  const router = useRouter()
  const auth = useStoreAuth( auth => auth )

  useEffect(() => {
    type === 'public' && auth.isLoggedIn && router.push(redirect)
    type === 'private' && !auth.isLoggedIn && router.push(redirect)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.isLoggedIn])

  return {
    unauthenticatedUser: auth.isLoggedIn === false || auth.isLoggedIn === undefined,
    authenticatedUser: auth.isLoggedIn === true || auth.isLoggedIn === undefined
  }
}

export default useProtected