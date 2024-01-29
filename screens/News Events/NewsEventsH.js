
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EventsScreen from './EventsScreen';
import NewsScreen from './NewsScreen';

const Tab = createMaterialTopTabNavigator();

const NewsEventsH = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
    </Tab.Navigator>
  );
};

export default NewsEventsH;


