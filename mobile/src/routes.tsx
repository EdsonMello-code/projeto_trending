import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Categories from './pages/Categories'
import Favorites from './pages/Favorites'
import Trending from './pages/Trending'
import Offline from './pages/Offline'

const Routes = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={'none'}
        screenOptions={{
            animationEnabled: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal'
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Trending" component={Trending} />
        <Stack.Screen name="Offline" component={Offline} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
