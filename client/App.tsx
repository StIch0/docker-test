import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RootStackNavigator } from '@app/navigation/RootStackNavigator'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from '@app/store'

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider style={{ flex: 1 }}>
        <PersistGate persistor={persistor}>
          <Provider store={store}>
            <RootStackNavigator />
          </Provider>
        </PersistGate>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export { App }
