import { Button } from '@react-native-material/core'
import { Text, View } from 'react-native'
import { useContext } from 'react'
import { clearStoredToken } from '../storage/tokenStorage'
import { clearStoredUser } from '../storage/userStorage'
import { logout, useAuth } from '../components/auth/hooks/useAuth'

const Home = () => {
  const { setToken } = useAuth()

  const handleLogout = () => {
    logout()
      .then(({ data }) => {
        // clearStoredToken()
        setToken(null)
        clearStoredUser()
      })
      .catch((err) => console.log(err))
  }
  return (
    <View>
      <Text>Home</Text>
      <Button title='Logout' onPress={handleLogout} />
    </View>
  )
}

export default Home
