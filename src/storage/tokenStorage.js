import AsyncStorage from '@react-native-async-storage/async-storage'

export const getStoredToken = async () => {
  const storedToken = await AsyncStorage.getItem('tgm-token')
  return storedToken ? JSON.parse(storedToken) : null
}

export const setStoredToken = async (token) => {
  await AsyncStorage.setItem('tgm-token', JSON.stringify(token))
}

export const clearStoredToken = async () => {
  await AsyncStorage.removeItem('tgm-token')
}

export default {
  getStoredToken,
  setStoredToken,
  clearStoredToken
}
