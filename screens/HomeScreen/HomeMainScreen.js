
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './Profile';

const Tab = createMaterialTopTabNavigator();

const HomeMainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Menu" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default HomeMainScreen