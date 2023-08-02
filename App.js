import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text } from 'react-native'
import Navigation from './src/components/common/Navigation'
import { AuthContextProvider } from './src/context/AuthContext'
import { AppContextProvider } from './src/context/AppContext'
import { ThemeProvider, useTheme } from '@react-native-material/core'

const App = () => {
  const theme = useTheme()

  theme.palette.primary.main = '#1A237E'

  return (
    <ThemeProvider theme={theme}>

      <AuthContextProvider>
        <AppContextProvider>
          <Navigation />
        </AppContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
