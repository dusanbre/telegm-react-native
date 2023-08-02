import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Navigation from './src/components/common/Navigation'
import { AuthContextProvider } from './src/context/AuthContext'

const App = () => {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  )
}

export default App
