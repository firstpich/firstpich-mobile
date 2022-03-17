import React, {useEffect} from 'react';
import {TailwindProvider} from 'tailwind-rn';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from 'react-native-splash-screen';

import IntroPage from './pages/IntroPage';
import GetStartedPage from './pages/GetStartedPage';
import SignUp from './pages/SignUp';
import OtpPage from './pages/OtpPage';

import utilities from '../tailwind.json';

export type RootStackParamList = {
  IntroPage: undefined;
  GetStartedPage: undefined;
  SignUp: undefined;
  OtpPage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
          <Stack.Screen name="OtpPage" component={OtpPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
