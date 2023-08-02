import { Text, Box, Button, Flex, IconButton } from '@react-native-material/core'
import { View } from 'react-native'
import { useContext } from 'react'
import { clearStoredToken } from '../storage/tokenStorage'
import { clearStoredUser, getStoredUser } from '../storage/userStorage'
import { logout, useAuth } from '../components/auth/hooks/useAuth'
import { useAppContext } from '../context/AppContext'
import { FontAwesome5 } from '@expo/vector-icons'

const Home = () => {
  const { setToken } = useAuth()
  const { user } = useAppContext()

  const handleLogout = () => {
    logout()
      .then(({ data }) => {
        setToken(null)
        clearStoredUser()
      })
      .catch((err) => console.log(err))
  }
  return (
    <View style={{ padding: 10 }}>
      <Flex inline center style={{ justifyContent: 'space-between' }} >
        <Box >
          <Text variant='h5'>Home</Text>
        </Box>
        <Box>
          <IconButton
            icon={<FontAwesome5 name="bars" size={24} color="white" />}
            style={{ borderRadius: 5, backgroundColor: '#1A237E' }}
          />

        </Box>
      </Flex>
      <Button title='Logout' onPress={handleLogout} />
    </View>
  )
}

export default Home
