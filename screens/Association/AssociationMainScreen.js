
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PresidentScreen from './PresidentScreen';
import SecretaryScreen from './SecretaryScreen';
import BODScreen from './BODScreen';
import MembersScreen from './MembersScreen';
// import { useTheme } from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

const AssociationMainScreen = () => {

// const theme = useTheme();

  return (
    <Tab.Navigator>

        <Tab.Screen name="President" component={PresidentScreen} />
        <Tab.Screen name="Secretary"  component={SecretaryScreen} />
        <Tab.Screen name="bod"  component={BODScreen} />
        <Tab.Screen name="Member"  component={MembersScreen} />

    </Tab.Navigator>
  )
}

export default AssociationMainScreen




