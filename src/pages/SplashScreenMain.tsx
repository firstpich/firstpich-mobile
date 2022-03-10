import React from 'react';
import {View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';
// import Badger from '../icons/badger-phone-01.svg';
import Svgtest from '../icons/fp.svg';

export default function MyComponent() {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('flex-1 justify-center items-center bg-primary')}>
      <Svgtest width={100} height={100} />
      <Text style={tailwind('text-white text-3xl mt-4')}>firstpich</Text>
    </View>
  );
}
