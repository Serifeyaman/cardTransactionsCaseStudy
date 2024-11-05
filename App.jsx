import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Routes from '@app/routes';
import { ThemeProvider } from '@app/lib';


function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

export default App;
