import create from 'zustand'
export interface User {
  id    : string
  name  : string
  email : string
  token : string
}
interface AuthState {
  user          : User | null
  isLoggedIn    : boolean
  setIsLoggedIn : (isLoggedIn: boolean) => void
  setUser       : (user: User) => void
}

export const useStoreAuth = create<AuthState>((set) => ({
  user          : null,
  isLoggedIn    : false,
  setIsLoggedIn : () => set((state) => ({ ...state, isLoggedIn: true })),
  setUser       : (user: User) => set((state) => ({ ...state, user })),
}))

