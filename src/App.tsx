import React, {useEffect} from 'react';
import {TailwindProvider} from 'tailwind-rn';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from 'react-native-splash-screen';

import IntroPage from './pages/IntroPage';
import GetStartedPage from './pages/GetStartedPage';
import SignUp from './pages/SignUp';

import utilities from '../tailwind.json';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="IntroPage">
          <Stack.Screen name="IntroPage" component={IntroPage} />
          <Stack.Screen name="GetStartedPage" component={GetStartedPage} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
