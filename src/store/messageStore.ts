import create, { GetState, SetState } from 'zustand'

type MessageType = 'info' | 'success' | 'warning' | 'error' | 'loading' | null

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
  type          : null,
  setError      : ( props: Message ) => set((state) => ({
     ...state, 
     error      : props.error, 
     type: props.type,
     messageError: props.message 
  })),
}))



