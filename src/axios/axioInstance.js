import axios from 'axios'
import { baseURL } from '../config/config'
import { getStoredToken } from '../storage/tokenStorage'
import { useEffect, useState } from 'react'

const url = baseURL

const config = {
  baseURL: `${url}/api/v1`,
  timeout: 180000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}

export const withAuthorization = (requestConfig) => {
  const tokenData = null

  getStoredToken()
    .then((token) => tokenData = token)
    .catch((err) => console.log(err))

  if (!tokenData) return requestConfig
  requestConfig.headers = { ...requestConfig.headers, Authorization: `Bearer ${tokenData.accessToken}` }
  return requestConfig
}

export const axiosInstance = axios.create(config)

export default {
  withAuthorization,
  axiosInstance
}
