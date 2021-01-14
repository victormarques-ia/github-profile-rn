import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
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
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Screen>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </Screen>
    </ThemeProvider>
  );
};

const Screen = styled.SafeAreaView`
  flex: 1;
`;

export default App;
