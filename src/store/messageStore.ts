import create, { GetState, SetState } from 'zustand'

export type MessageType = 'info' | 'success' | 'warning' | 'error' | 'loading' 

interface Message {
  error: boolean, 
  message: string, 
  type: MessageType
}

interface ErrorState {
  error         : boolean
  messageError  : string
  type          : MessageType
  setError      : ( props: Message) => void
}

export const useMessageError = create<ErrorState>((set, get) => ({
  error         : false,
  messageError  : '',
  type          : 'info',
  setError      : ( props: Message ) => set((state) => ({
     ...state, 
     error      : props.error, 
     type: props.type,
     messageError: props.message 
  })),
}))



