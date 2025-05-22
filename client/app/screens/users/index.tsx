import { useUserItemIdx } from '@app/store/users/selectors'
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native'
import { UserListItemView } from './components/UserListItemView'
import { LogoutButtonView } from './components/LogoutButtonView'

const renderItem = ({ item }: ListRenderItemInfo<number>) => (
  <UserListItemView id={item} />
)

const keyExtractor = (id: number) => `${id}`

const UsersScreen = () => {
  const idx = useUserItemIdx()

  return (
    <FlatList
      data={idx}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.contentContainerStyle}
      ListFooterComponent={LogoutButtonView}
    />
  )
}

export { UsersScreen }

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    rowGap: 10
  }
})
