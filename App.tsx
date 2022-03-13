import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';

// import MyComponent from './src/components/MyComponent';

// Pages
import SplashScreen from './src/pages/SplashScreenMain';

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <SplashScreen />
    </TailwindProvider>
  );
}
