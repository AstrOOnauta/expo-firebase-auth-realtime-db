import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './src/styles/theme'
import SignUp from './src/pages/SignUp'
import { StatusBar } from 'react-native'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
      <SignUp />
    </ThemeProvider>
  )
}
