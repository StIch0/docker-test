import { ScrollView, StyleSheet } from 'react-native'
import { useForm } from 'react-hook-form'
import { RegisterForm } from './types'
import { TextInput } from '@app/forms/TextInput'
import { colors } from '@app/ui/colors'
import { Button } from '@app/ui/components/Button'
import { useRegister } from './hooks/useRegister'
import { useNavigateAuth } from './hooks/useNavigateAuth'

const LaunchScreen = () => {
  const { control, handleSubmit, setError } = useForm<RegisterForm>({})

  const onPressSubmit = useRegister(setError)

  const onNavigateAuth = useNavigateAuth()

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
        text='Зарегистрироваться'
        textStyle={styles.buttonText}
        onPress={handleSubmit(onPressSubmit)}
      />

      <Button
        style={styles.button}
        text='Войти'
        textStyle={styles.buttonText}
        onPress={onNavigateAuth}
      />
    </ScrollView>
  )
}

export { LaunchScreen }

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
