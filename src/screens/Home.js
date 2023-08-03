import { Text, Box, Button, Flex, IconButton, TextInput, ActivityIndicator } from '@react-native-material/core'
import { StyleSheet, View } from 'react-native'
import { useContext } from 'react'
import { clearStoredToken } from '../storage/tokenStorage'
import { clearStoredUser, getStoredUser } from '../storage/userStorage'
import { logout, useAuth } from '../components/auth/hooks/useAuth'
import { useAppContext } from '../context/AppContext'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { format } from 'date-fns'
import { sl } from 'date-fns/locale'
import { useWorkingDay } from '../components/working-days/hooks/useWorkingDay'

const Home = () => {
  const { setToken } = useAuth()
  const { user } = useAppContext()
  const { data: workingDayRsp, isFetched } = useWorkingDay('2023-08-04')

  const handleLogout = () => {
    logout()
      .then(({ data }) => {
        setToken(null)
        clearStoredUser()
      })
      .catch((err) => console.log(err))
  }

  if (!isFetched) return <ActivityIndicator color='primary' />

  return (
    <View style={{ padding: 20 }}>
      <Text variant='h6'>Pozdravljen, {user?.name}! </Text>
      <Box style={styles.card}>
        <Text style={styles.cardText}>{format(new Date(workingDayRsp.date), 'EEEE, dd.LL.yyyy')}</Text>
        <Text variant='h5' style={styles.cardText}>EL. GORENJSKA KRANJ PE DOMAČA HIŠA</Text>
        <Text variant='body' style={styles.cardText}>13812</Text>
        <Button title='VPOGLED V IZMENO' color='white' style={{ marginTop: 10 }} leading={props => <FontAwesome5 name="users" {...props} />} />
      </Box>
      <Box style={styles.formWrap}>
        <TextInput
          style={styles.formInput}
          variant='outlined'
          placeholder='Začetek dela'
          label='Začetek dela'
          trailing={props => <MaterialCommunityIcons name="clock-outline" {...props} />}
          helperText='Vpišite kdaj ste začeli z delom.'
        />
        <TextInput
          style={styles.formInput}
          variant='outlined'
          placeholder='Konec dela'
          label='Konec dela'
          trailing={props => <MaterialCommunityIcons name="clock-outline" {...props} />}
          helperText='Vpišite kdaj ste končali z delom.'
        />
      </Box>
      <Button title='Shrani' variant='contained' style={{ backgroundColor: '#388E3C', color: '#fff' }} onPress={handleLogout} />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1A237E',
    borderRadius: 5,
    padding: 20,
    marginVertical: 20
  },
  cardText: {
    color: '#fff',
    marginBottom: 10
  },
  formWrap: {
    marginVertical: 10
  },
  formInput: {
    marginBottom: 10
  }
})

export default Home
