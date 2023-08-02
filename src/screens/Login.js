import { View } from 'react-native'
import { Spacer, Box, TextInput, Button } from '@react-native-material/core'
import form from '../styles/Form'
import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import { setStoredToken } from '../storage/tokenStorage'
import { getStoredUser, setStoredUser } from '../storage/userStorage'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(AuthContext)

  const handleLogin = () => {
    login({ email, password })
      .then(({ data }) => {
        setStoredToken(data.token)
        setStoredUser(data.user?.attributes)
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
