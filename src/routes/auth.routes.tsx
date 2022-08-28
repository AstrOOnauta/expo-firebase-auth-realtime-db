import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import RecoveryPassword from '../pages/RecoveryPassword'

export function AuthRoutes() {
  const navigation = createStackNavigator()

  return (
    <navigation.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <navigation.Screen name="SignIn" component={SignIn} />
      <navigation.Screen name="SignUp" component={SignUp} />
      <navigation.Screen name="RecoveryPassword" component={RecoveryPassword} />
    </navigation.Navigator>
  )
}
