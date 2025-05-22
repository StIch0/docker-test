import { ScrollView, StyleSheet } from 'react-native'
import { useForm } from 'react-hook-form'
import { TextInput } from '@app/forms/TextInput'
import { colors } from '@app/ui/colors'
import { Button } from '@app/ui/components/Button'
import { AuthForm } from './types'
import { useAuth } from './hooks/useAuth'

const AuthScreen = () => {
  const { control, handleSubmit, setError } = useForm<AuthForm>({})

  const onPressSubmit = useAuth(setError)

  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <TextInput
        style={styles.input}
        placeholder='E-mail'
        control={control}
        keyboardType='email-address'
        name='email'
      />
      <TextInput
        keyboardType='visible-password'
        secureTextEntry
        style={styles.input}
        placeholder='password'
        control={control}
        name='password'
      />
      <Button
        style={styles.button}
        text='Войти'
        textStyle={styles.buttonText}
        onPress={handleSubmit(onPressSubmit)}
      />
    </ScrollView>
  )
}

export { AuthScreen }

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 20,
    backgroundColor: colors.white,
    flexGrow: 0,
    rowGap: 20
  },
  buttonText: {
    textAlign: 'center'
  },
  input: {
    borderWidth: 0.5,
    borderColor: colors.gray
  },
  button: {
    borderRadius: 14,
    borderWidth: 1
  }
})
