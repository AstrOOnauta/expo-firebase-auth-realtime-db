import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ThemeProvider } from 'styled-components'
import theme from './src/styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text style={styles.text}>
          An Expo boilerplate including TypeScript, ESlint, Prettier, Husky,
          Lint-staged and Jest!
        </Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
})
