import { createContext, useContext } from 'react'
import { getStoredToken } from '../storage/tokenStorage'
import { getStoredUser } from '../storage/userStorage'

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    getStoredToken()
      .then((token) => setToken(token))
      .catch((err) => console.log(err))

    getStoredUser()
      .then((user) => setUser(user))
      .catch((err) => console.log(err))
  }, [])

  return (
    <AppContext.Provider value={{ token, user }}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)

export default {
  AppContext,
  AppContextProvider,
  useAppContext
}
