import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo'
import theme from './src/styles/theme';

import { ThemeProvider } from 'styled-components'

import Home from './src/screens/Home';
import CarDetails from './src/screens/CarDetails';
import Scheduling from './src/screens/Scheduling';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Scheduling />
    </ThemeProvider>
  );
}