import axios from 'axios'
import { baseURL } from '../config/config'
import { getStoredToken } from '../storage/tokenStorage'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAppContext } from '../context/AppContext'

const url = baseURL

const config = {
  baseURL: `${url}/api/v1`,
  timeout: 180000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}

export const withAuthorization = async (requestConfig) => {

  await getStoredToken()
    .then((token) => {
      if (!token) return requestConfig
      requestConfig.headers = { ...requestConfig.headers, Authorization: `Bearer ${token.accessToken}` }
      return requestConfig
    })
    .catch((err) => console.log(err))

  return requestConfig
}

export const axiosInstance = axios.create(config)

export default {
  withAuthorization,
  axiosInstance
}
