import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Home, Profile } from '../views';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);

export default AppRoutes;
