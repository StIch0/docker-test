import { useCallback } from 'react'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import {
  View,
  TextInput as RNTextInput,
  TextInputProps,
  Text,
  StyleSheet
} from 'react-native'

type OwnProps<T extends FieldValues> = {
  control: Control<T, any, T>
  name: Path<T>
} & TextInputProps

const TextInput = <T extends FieldValues>({
  control,
  name,
  style,
  ...props
}: OwnProps<T>) => {
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({ control, name })

  const onChangeText = useCallback(
    (newValue: string) => {
      onChange(newValue)
    },
    [onChange]
  )

  return (
    <View style={styles.container}>
      <RNTextInput
        style={[styles.input, style]}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
      {error ? <Text>{error.message}</Text> : null}
    </View>
  )
}

export { TextInput }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  input: {
    paddingHorizontal: 12,
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8
  }
})
