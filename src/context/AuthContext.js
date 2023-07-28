import { createContext } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const login = (email, password) => {
    console.log(email, password)
  }

  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  )
}
