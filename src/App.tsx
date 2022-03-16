import React, {useEffect} from 'react';
import {TailwindProvider} from 'tailwind-rn';

import SplashScreen from 'react-native-splash-screen';

// import Home from './pages/Home';
// import IntroPage from './pages/IntroPage';
// import GetStartedPage from './pages/GetStartedPage';
import SignUp from './pages/SignUp';

import utilities from '../tailwind.json';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <TailwindProvider utilities={utilities}>
      {/* <Home /> */}
      {/* <IntroPage /> */}
      {/* <GetStartedPage /> */}
      <SignUp />
    </TailwindProvider>
  );
}
