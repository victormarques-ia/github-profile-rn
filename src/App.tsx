import React from 'react';
import { AppLoading } from 'expo';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { Home } from './views';
import {
  Barlow_400Regular,
  Barlow_500Medium,
  Barlow_700Bold,
  useFonts,
} from '@expo-google-fonts/barlow';

import styled, { ThemeProvider } from 'styled-components/native';
import theme from './global/styles/theme';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_700Bold,
  });

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Screen>
        <Home />
      </Screen>
    </ThemeProvider>
  );
};

const Screen = styled.SafeAreaView`
  flex: 1;
  align-items: center;

  font-family: ${props => props.theme.fonts.default.family};
  font-size: ${props => props.theme.fonts.default.size};
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};

  padding-top: ${Number(
    Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  )}px;
`;

export default App;
