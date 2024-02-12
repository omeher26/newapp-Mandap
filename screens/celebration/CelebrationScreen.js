// CelebrationScreen.js

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BirthdayScreen from './BirthdayScreen';
import AnniversaryScreen from './AnniversaryScreen';
// import { useTheme } from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();
// const theme = useTheme()

const CelebrationScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Birthday" component={BirthdayScreen} />
      <Tab.Screen name="Anniversary" component={AnniversaryScreen} />
    </Tab.Navigator>
  );
};

export default CelebrationScreen;
