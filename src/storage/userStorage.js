import AsyncStorage from '@react-native-async-storage/async-storage'

export const getStoredUser = async () => {
  const storedUser = await AsyncStorage.getItem('tgm-user')
  return storedUser ? JSON.parse(storedUser) : null
}

export const setStoredUser = async (user) => {
  await AsyncStorage.setItem('tgm-user', JSON.stringify(user))
}

export const clearStoredUser = async () => {
  await AsyncStorage.removeItem('tgm-user')
}

export default {
  getStoredUser,
  setStoredUser,
  clearStoredUser
}
