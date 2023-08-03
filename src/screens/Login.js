import { useContext, useState } from 'react'
import { login, useAuth } from '../components/auth/hooks/useAuth'
import axios from 'axios'

import { View } from 'react-native'
import { Spacer, Box, TextInput, Button } from '@react-native-material/core'

import { getStoredUser, setStoredUser } from '../storage/userStorage'
import { useAppContext } from '../context/AppContext'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setToken } = useAuth()
  const { setUser } = useAppContext()

  const handleLogin = () => {
    login({ email, password })
      .then(({ data }) => {
        setToken(data.token)
        setUser(data.user?.attributes)
        navigation.navigate('Home')
      })
      .catch((err) => console.log(err))
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Box m={20} w={'80%'}>
        <TextInput
          placeholder='Email'
          label='Email'
          style={{ marginBottom: 20 }}
          inputStyle={{ backgroundColor: 'white' }}
          variant='outlined'
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          placeholder='Password'
          label='Password'
          style={{ marginBottom: 20 }}
          inputStyle={{ backgroundColor: 'white' }}
          variant='outlined'
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <Button title='Login' style={{ height: 50, justifyContent: 'center' }} onPress={handleLogin} />
      </Box>
    </View>
  )
}

export default Login
