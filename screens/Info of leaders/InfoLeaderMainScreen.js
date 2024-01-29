
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PresidentScreen from '../Association/PresidentScreen';
import SecretaryScreen from '../Association/SecretaryScreen';
import BODScreen from '../Association/BODScreen';

const Tab = createMaterialTopTabNavigator();

const InfoLeaderMainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="President" component={PresidentScreen} />
      <Tab.Screen name="Secretary" component={SecretaryScreen} />
      <Tab.Screen name="bod" component={BODScreen} />
    </Tab.Navigator>
  )
}

export default InfoLeaderMainScreen


