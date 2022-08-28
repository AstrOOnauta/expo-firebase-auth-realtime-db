import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native'
import 'intl'
import 'intl/locale-data/jsonp/en-US'

import theme from './src/styles/theme'
import Home from './src/pages/Home'
// import SignUp from './src/pages/SignUp'
// import RecoveryPassword from './src/pages/RecoveryPassword'
// import SignIn from './src/pages/SignIn'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <RecoveryPassword /> */}
      <Home />
    </ThemeProvider>
  )
}
