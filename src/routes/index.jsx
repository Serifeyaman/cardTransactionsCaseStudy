import React from 'react';
import {StatusBar} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Cards, Home, Profile} from '@app/views';
import {Icons} from '@app/components';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      // tabBar={{
      //   showIcon: true,
      //   showLabel: false,
      //   lazyLoad: true,
      //   style: {
      //     backgroundColor: 'transparent',
      //     borderTopWidth: 0,
      //     position: 'absolute',
      //     left: 50,
      //     right: 50,
      //     bottom: 20,
      //     height: 100,
      //   },
      // }}
      initialRouteName="Cards"
      screenOptions={() => ({
        tabBarStyle: {
          borderTopWidth: 2,             // üst sınırın kalınlığı
          borderTopColor: '#e13915', 
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 16, color: '#313538'},
        // headerStatusBarHeight: 14,
        headerTransparent: false,
        headerStyle: {marginTop: StatusBar.currentHeight || 0},
        tabBarActiveTintColor: '#e13915',
        tabBarInactiveTintColor: '#c1c8cd',
        tabBarLabelStyle: {fontSize: 11, fontWeight: '600'},
        tabBarIconStyle: {height: 20, width: 20},
      })}>
      <Tab.Screen
        options={{
          tabBarIcon: props => <Icons.Home width="20" height="20" {...props} />,
          tabBarLabel: 'Ana Sayfa',
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerTransparent: true,
          headerTitle: 'Kartım',
          tabBarIcon: props => <Icons.Card width="20" height="20" {...props} />,
          tabBarLabel: 'Kartlar',
        }}
        name="Cards"
        component={Cards}
      />
      <Tab.Screen
        options={{tabBarLabel: 'Profil'}}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Routes;
