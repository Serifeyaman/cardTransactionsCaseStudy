import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Cards, Home, Profile} from '@app/views';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cards" component={Cards} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Routes;
