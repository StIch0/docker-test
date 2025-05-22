import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

import type { RootStackParamList } from '../types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const useStackNavigation = <
  T extends Partial<RootStackParamList>,
  R extends keyof RootStackParamList = never
>() => useNavigation<NativeStackNavigationProp<T, R>>()

const useAppRoute = <T extends RouteProp<Partial<RootStackParamList>>>() =>
  useRoute<T>()

export { useStackNavigation, useAppRoute }
