import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text } from 'react-native'
import Navigation from './src/components/common/Navigation'
import { AuthContextProvider } from './src/context/AuthContext'
import { AppContextProvider } from './src/context/AppContext'
import { ThemeProvider, useTheme } from '@react-native-material/core'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './src/react-query/queryClient'

const App = () => {
  const theme = useTheme()

  theme.palette.primary.main = '#1A237E'
  theme.palette.secondary.main = '#388E3C'
  theme.palette.secondary.contrast = '#ffffff'
  theme.palette.background.main = '#f7f7f7'

  return (
    <QueryClientProvider client={queryClient}>

      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <AppContextProvider>
            <Navigation />
          </AppContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
