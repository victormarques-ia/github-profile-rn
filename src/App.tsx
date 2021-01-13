import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {
  Barlow_400Regular,
  Barlow_500Medium,
  Barlow_700Bold,
  useFonts,
} from '@expo-google-fonts/barlow';

import styled, { ThemeProvider } from 'styled-components/native';
import theme from './global/styles/theme';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_700Bold,
  });

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <Screen>
          <AppRoutes />
        </Screen>
      </ThemeProvider>
    </NavigationContainer>
  );
};

const Screen = styled.SafeAreaView`
  flex: 1;
`;

export default App;
