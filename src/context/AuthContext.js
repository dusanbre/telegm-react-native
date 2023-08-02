import { createContext, useCallback, useContext, useState } from 'react'
import { axiosInstance, withAuthorization } from '../axios/axioInstance'
import { clearStoredToken, getStoredToken, setStoredToken } from '../storage/tokenStorage'

const storedToken = getStoredToken()

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(storedToken)

  const setNewToken = useCallback((newToken) => {
    if (newToken) {
      setStoredToken(newToken)
      setToken(newToken)
    } else {
      clearStoredToken()
      setToken(null)
    }
  }, [])

  // const login = (data) => {
  //   const axiosRsp = axiosInstance({
  //     url: '/auth',
  //     method: 'POST',
  //     data
  //   })
  //   return axiosRsp
  // }

  // const logout = () => {
  //   const axiosRsp = axiosInstance(withAuthorization({
  //     url: '/auth',
  //     method: 'DELETE',
  //   }))
  //   return axiosRsp
  // }


  return (
    <AuthContext.Provider value={{ token, setToken: setNewToken }}>{children}</AuthContext.Provider>
  )
}

export const AuthContext = createContext()
