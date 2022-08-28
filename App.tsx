import React from 'react'
import { ThemeProvider } from 'styled-components'

import 'intl'
import 'intl/locale-data/jsonp/en-US'

import theme from './src/styles/theme'
import Routes from './src/routes'
import { AuthContextProvider } from './src/shared/context/AuthContext'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ThemeProvider>
  )
}
