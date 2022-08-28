import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'

import { AuthRoutes } from './auth.routes'
import AuthContext from '../shared/context/AuthContext'
import Home from '../pages/Home'

export default function Routes() {
  const { user } = useContext(AuthContext)

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
      {user && user.id !== '' ? <Home /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
