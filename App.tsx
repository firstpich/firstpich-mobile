import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import MyComponent from './src/components/MyComponent';
import utilities from './tailwind.json';

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <MyComponent />
    </TailwindProvider>
  );
}
