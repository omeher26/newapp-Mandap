
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EventsScreen from './EventsScreen';
import NewsScreen from './NewsScreen';
// import { useTheme } from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();
// const theme = useTheme();

const NewsEventsH = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
    </Tab.Navigator>
  );
};

export default NewsEventsH;


