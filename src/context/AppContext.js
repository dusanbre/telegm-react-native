import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { getStoredToken } from '../storage/tokenStorage'
import { clearStoredUser, getStoredUser, setStoredUser } from '../storage/userStorage'
import { sl } from 'date-fns/locale'
import { setDefaultOptions } from 'date-fns'

setDefaultOptions({ locale: sl })

const storedUser = getStoredUser()

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(storedUser)

  const setNewUser = useCallback((newUser) => {
    if (newUser) {
      setStoredUser(newUser)
      setUser(newUser)
    } else {
      clearStoredUser()
      setUser(null)
    }
  }, [])

  return (
    <AppContext.Provider value={{ user, setUser: setNewUser }}>{children}</AppContext.Provider>
  )
}

export const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

export default {
  AppContext,
  AppContextProvider,
  useAppContext
}
