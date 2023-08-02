import SyncStorage from 'sync-storage'

export const getStoredUser = () => {
  const storedUser = SyncStorage.get('tgm-user')
  return storedUser ? JSON.parse(storedUser) : null
}

export const setStoredUser = (user) => {
  SyncStorage.set('tgm-user', JSON.stringify(user))
}

export const clearStoredUser = () => {
  SyncStorage.remove('tgm-user')
}

export default {
  getStoredUser,
  setStoredUser,
  clearStoredUser
}
