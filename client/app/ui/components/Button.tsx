import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native'
import { TouchableProps } from '../types'
import { Touchable } from './Touchable'

type OwnProps<T> = TouchableProps<T> & {
  text: string
  textStyle?: StyleProp<TextStyle>
}

const Button = <T,>({ textStyle, text, style, ...props }: OwnProps<T>) => {
  return (
    <Touchable style={[styles.container, style]} {...props}>
      <Text style={textStyle}>{text}</Text>
    </Touchable>
  )
}

export { Button }

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15
  }
})
