import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { axiosInstance, withAuthorization } from '../../../axios/axioInstance'

export const useAuth = () => useContext(AuthContext)

export const login = async (data) => {
  const axiosRsp = await axiosInstance({
    url: '/auth',
    method: 'POST',
    data
  })
  return axiosRsp
}

export const logout = async () => {
  const axiosRsp = await axiosInstance(withAuthorization({
    url: '/auth',
    method: 'DELETE'
  }))
  return axiosRsp
}

export default { login, logout }
