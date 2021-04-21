import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import React from 'react'

import { ThemeProvider } from 'styled-components'
import theme from './src/styles/theme'

import {
  useFonts,
  Jost_600SemiBold,
  Jost_500Medium,
  Jost_400Regular
} from '@expo-google-fonts/jost'

import Routes from './src/routes'

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'Jost-SemiBold': Jost_600SemiBold,
    'Jost-Medium': Jost_500Medium,
    'Jost-Regular': Jost_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />

      <StatusBar style="auto" />
    </ThemeProvider>
  )
}

export default App
