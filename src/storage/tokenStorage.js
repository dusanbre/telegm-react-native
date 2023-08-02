import AsyncStorage from '@react-native-async-storage/async-storage'

export const getStoredToken = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('tgm-token')
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    console.log(e)

  }
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
