import { useUserItemById } from '@app/store/users/selectors'
import { colors } from '@app/ui/colors'
import { StyleSheet, Text, View } from 'react-native'

type OwnProps = {
  id: number
}

const UserListItemView = ({ id }: OwnProps) => {
  const user = useUserItemById(id)

  if (!user) {
    return null
  }

  const { email } = user
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{email}</Text>
    </View>
  )
}

export { UserListItemView }

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: colors.white,
    shadowColor: colors.dark,
    shadowOffset: {
      height: 4,
      width: 0
    },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 1
  },
  text: {
    color: colors.dark,
    textAlign: 'left',
    fontSize: 14,
    lineHeight: 18
  }
})
