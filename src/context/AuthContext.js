import { createContext } from 'react'
import { axiosInstance, withAuthorization } from '../axios/axioInstance'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const login = (data) => {
    const axiosRsp = axiosInstance({
      url: '/auth',
      method: 'POST',
      data
    })
    return axiosRsp
  }

  const logout = () => {
    const axiosRsp = axiosInstance(withAuthorization({
      url: '/auth',
      method: 'DELETE',
    }))
    return axiosRsp
  }

  return (
    <AuthContext.Provider value={{ login, logout }}>{children}</AuthContext.Provider>
  )
}
