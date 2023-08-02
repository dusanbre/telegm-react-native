import { Button } from '@react-native-material/core'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

const Home = () => {
  const { logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
      .then(({ data }) => console.log(data))
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
