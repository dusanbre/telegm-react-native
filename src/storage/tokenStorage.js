import SyncStorage from 'sync-storage'

export const getStoredToken = () => {
  const storedToken = SyncStorage.get('tgm-token')
  return storedToken ? JSON.parse(storedToken) : null
}

export const setStoredToken = (token) => {
  SyncStorage.set('tgm-token', JSON.stringify(token))
}

export const clearStoredToken = () => {
  SyncStorage.remove('tgm-token')
}

export default {
  getStoredToken,
  setStoredToken,
  clearStoredToken
}
