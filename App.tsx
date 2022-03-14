import React, {useEffect} from 'react';
import {TailwindProvider} from 'tailwind-rn';

import SplashScreen from 'react-native-splash-screen';

import Home from './src/pages/Home';

import utilities from './tailwind.json';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <TailwindProvider utilities={utilities}>
      <Home />
    </TailwindProvider>
  );
}
