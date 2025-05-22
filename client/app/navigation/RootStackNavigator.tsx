import {
  createNativeStackNavigator,
  NativeStackNavigationOptions
} from '@react-navigation/native-stack'
import { RootStackParamList } from './types'
import { LaunchScreen } from '@app/screens/launch'
import { useInitScreen } from './hooks/useInitScreen'
import { UsersScreen } from '@app/screens/users'
import { useUsers } from '@app/screens/users/useUsers'
import { AuthScreen } from '@app/screens/auth'

const Stack = createNativeStackNavigator<RootStackParamList>()

const options: NativeStackNavigationOptions = {
  headerBackTitle: 'Назад',
  title: ''
}

const RootStackNavigator = () => {
  const initialRouteName = useInitScreen()

  useUsers()

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name='LaunchScreen'
        component={LaunchScreen}
        options={options}
      />
      <Stack.Screen name='UsersScreen' component={UsersScreen} />
      <Stack.Screen
        name='AuthScreen'
        component={AuthScreen}
        options={options}
      />
    </Stack.Navigator>
  )
}

export { RootStackNavigator }
