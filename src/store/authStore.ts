import create from 'zustand'
export interface User {
  id    : string
  name  : string
  email : string
  token : string
}
interface AuthState {
  user          : User | null
  isLoggedIn    : boolean | undefined
  setIsLoggedIn : (isLoggedIn: boolean) => void
  setUser       : (user: User) => void
  setClearUser  : () => void
}

export const useStoreAuth = create<AuthState>((set) => ({
  user          : null,
  isLoggedIn    : undefined,
  setIsLoggedIn : () => set((state) => ({ ...state, isLoggedIn: true })),
  setUser       : (user: User) => set((state) => ({ ...state, user })),
  setClearUser  : () => set((state) => ({ user: null, isLoggedIn: false })),
}))

