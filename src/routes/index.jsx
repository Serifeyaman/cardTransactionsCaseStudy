import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Cards, Home, Profile} from '@app/views';
import {Icons} from '@app/components';
import {useTheme} from '@app/lib';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const Routes = () => {
  const insets = useSafeAreaInsets();
  const {theme} = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Cards"
      screenOptions={() => ({
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: theme.typography.fontSizes.medium,
          color: theme.colors.dark_secondary,
        },
        headerStatusBarHeight: 16,
        headerTransparent: false,
        // headerStyle: {marginTop: insets.top || 0},
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.tint,
        tabBarLabelStyle: {
          fontSize: theme.typography.fontSizes.tabbarLabel,
          fontWeight: '500',
        },
      })}>
      <Tab.Screen
        options={{
          tabBarIcon: props =>
            props.focused ? (
              <View className="w-2/4 justify-center flex-1 items-center border-t-2 border-primary">
                <Icons.Home {...props} />
              </View>
            ) : (
              <Icons.Home {...props} />
            ),
          tabBarLabel: 'Ana Sayfa',
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerTransparent: true,
          headerTitle: 'Kartım',
          tabBarIcon: props =>
            props.focused ? (
              <View className="w-2/4 justify-center flex-1 items-center border-t-2 border-primary">
                <Icons.Card {...props} />
              </View>
            ) : (
              <Icons.Card {...props} />
            ),
          tabBarLabel: 'Kartlar',
        }}
        name="Cards"
        component={Cards}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: props =>
            props.focused ? (
              <View className="w-2/4 justify-center flex-1 items-center border-t-2 border-primary">
                <Icons.User {...props} />
              </View>
            ) : (
              <Icons.User {...props} />
            ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Routes;
