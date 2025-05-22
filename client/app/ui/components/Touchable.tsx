import { useCallback, useState } from 'react'
import { GestureResponderEvent, TouchableOpacity } from 'react-native'

import { TouchableProps } from '../types'

const Touchable = <T,>({
  onPress: outerOnPress,
  onPressIn: outerOnPressIn,
  onPressOut: outerOnPressOut,
  data,
  timeoutDelay = 1000,
  disabled = false,
  ...props
}: TouchableProps<T>) => {
  const [isPressed, setIsPressed] = useState(false)

  const onPress = useCallback(() => {
    outerOnPress?.(data)
  }, [outerOnPress, data])

  const onPressIn = useCallback(
    (event: GestureResponderEvent) => {
      setIsPressed(true)
      outerOnPressIn?.(event)
    },
    [outerOnPressIn]
  )

  const onPressOut = useCallback(
    (event: GestureResponderEvent) => {
      setTimeout(() => {
        setIsPressed(false)
        outerOnPressOut?.(event)
      }, timeoutDelay)
    },
    [outerOnPressOut, timeoutDelay]
  )

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={Boolean(isPressed || disabled)}
      {...props}
    />
  )
}

export { Touchable }
