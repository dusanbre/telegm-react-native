import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { axiosInstance, withAuthorization } from '../../../axios/axioInstance'

export const login = async (data) => {
  const axiosRsp = await axiosInstance({
    url: '/auth',
    method: 'POST',
    data
  })
  return axiosRsp.data
}

export const logout = async (data) => {
  await axiosInstance(withAuthorization({
    url: '/auth',
    method: 'DELETE'
  }))
  return true
}

export default { login, logout }
