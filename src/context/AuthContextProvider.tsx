import React, { createContext, useState } from 'react'

interface Props {}

type Actions = 'signup' | 'signin' | 'request' | 'reset' | 'close'

type HandleAuthAction = (action: Actions) => void

interface AuthContextValues {
  authAction: Actions
  handleAuthAction: HandleAuthAction
}

const initialState: AuthContextValues = {
  authAction: 'close',
  handleAuthAction: () => {},
}

export const AuthContext = createContext<AuthContextValues>(initialState)

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [authAction, setAuthAction] = useState<Actions>('close')

  const handleAuthAction: HandleAuthAction = (action) => {
    setAuthAction(action)
  }

  return (
    <AuthContext.Provider
      value={{
        authAction,
        handleAuthAction,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
