import { Text, Box, Button, Flex, IconButton, TextInput, ActivityIndicator, HStack } from '@react-native-material/core'
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
  const { data: workingDay, isFetched } = useWorkingDay('2023-08-04')
  console.log(workingDay)

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
      <Text variant='h6'>Pozdravljen, {user?.name}!</Text>
      <Box>
        <HStack style={{ alignItems: 'middle', marginTop: 20, }} justify='between'>
          <Text variant='h5' color='#00000061' style={{ alignSelf: 'center' }}>13. 5.</Text>
          <IconButton icon={props => <MaterialCommunityIcons name="chevron-left" size={30} color='#00000061' />} />
          <Text variant='h4' color='primary' style={{ alignSelf: 'center' }}>14. 5.</Text>
          <IconButton icon={props => <MaterialCommunityIcons name="chevron-right" size={30} color='#00000061' />} />
          <Text variant='h5' color='#00000061' style={{ alignSelf: 'center' }}>15. 5.</Text>
        </HStack>
      </Box>
      <Box style={styles.card}>
        <Text style={styles.cardText}>{format(new Date(workingDay.date), 'EEEE, dd.LL.yyyy')}</Text>
        <Text variant='h5' style={styles.cardText}>{workingDay.location.name}</Text>
        <Text variant='body' style={styles.cardText}>{workingDay.location.code}</Text>
        <Button title='VPOGLED V IZMENO' color='white' style={{ marginTop: 10 }} leading={props => <MaterialCommunityIcons name="account-multiple" {...props} />} />
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
        <HStack style={{ alignItems: 'middle', marginTop: 20 }} spacing={5}>
          <TextInput
            style={{ flex: 2 }}
            variant='outlined'
            placeholder='Začetek malice'
            label='Začetek malice'
            trailing={props => <MaterialCommunityIcons name="clock-outline" {...props} />}
          />
          <Box>
            <Text variant='h4'>-</Text>
          </Box>
          <TextInput
            style={{ flex: 1 }}
            variant='outlined'
            placeholder='10:30'
            inputStyle={{ backgroundColor: '#0000001F' }}
            editable={false}
          />
        </HStack>
        <Text variant='caption' style={{ paddingHorizontal: 10 }}>Vpišite kdaj ste začeli z malico. Odmor za malico je 30 min in se izračuna avtomatsko na polagi vpisanega začetka malice.</Text>
      </Box>
      <Button title='Shrani' variant='contained' style={{ backgroundColor: '#388E3C', color: '#fff', marginTop: 20 }} onPress={handleLogout} />
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
  cardText: { color: '#fff', marginBottom: 10 },
  formWrap: { marginVertical: 10 },
  formInput: { marginBottom: 10 }
})

export default Home
