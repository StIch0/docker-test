import { TouchableOpacityProps } from 'react-native'

type TouchableProps<T> = {
  data?: T
  onPress?: (data?: T) => void
  timeoutDelay?: number
} & Omit<TouchableOpacityProps, 'onPress'>

export type { TouchableProps }
