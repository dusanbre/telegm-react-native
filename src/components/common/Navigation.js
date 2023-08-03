import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DefaultTheme, NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import Login from '../../screens/Login'
import Home from '../../screens/Home'
import { clearStoredToken, getStoredToken } from '../../storage/tokenStorage'
import { useEffect, useState } from 'react'
import { clearStoredUser } from '../../storage/userStorage'
import { useAuth } from '../auth/hooks/useAuth'
import { View, Text, Image } from 'react-native'
import { Button, IconButton } from '@react-native-material/core'
import { FontAwesome5 } from '@expo/vector-icons'

const headerOptions = {
  headerTitle: (props) => <Image source={require('../../images/logo.png')} style={{ width: 100, height: 22 }} />,
  headerRight: () => (
    <IconButton
      icon={<FontAwesome5 name="bars" size={24} color="white" />}
      style={{ borderRadius: 5, backgroundColor: '#1A237E' }}
    />
  ),
  headerStyle: { backgroundColor: '#ffffff' },
  headerShadowVisible: false,
}

const Stack = createNativeStackNavigator()

const Navigation = () => {
  const { token } = useAuth()
  const navTheme = DefaultTheme
  navTheme.colors.background = '#ffffff'

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator>
        {!token
          ? (
            <Stack.Screen name='Login' component={Login} />
          )
          : (
            <Stack.Screen name='Home' component={Home} options={headerOptions} />
          )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
