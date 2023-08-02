import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../../screens/Login'
import Home from '../../screens/Home'
import { getStoredToken } from '../../storage/tokenStorage'
import { useEffect, useState } from 'react'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  const [token, setToken] = useState(null)

  useEffect(() => {
    getStoredToken()
      .then((token) => setToken(token))
      .catch((err) => console.log(err))
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!token
          ? (
            <Stack.Screen name='Login' component={Login} />
          )
          : (
            <Stack.Screen name='Home' component={Home} />
          )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
