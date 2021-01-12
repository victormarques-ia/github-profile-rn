import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { Home } from './views';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Number(
      `${Platform.OS === 'android' ? Constants.statusBarHeight : 0}`,
    ),
  },
});

export default App;
