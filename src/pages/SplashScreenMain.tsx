import React from 'react';
import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import Svgtest from '../icons/fp.svg';

const SplashScreenMain = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('flex-1 justify-center items-center bg-primary')}>
      <Svgtest width={60} height={60} />
      <Text
        style={tailwind(
          'text-white mt-2 text-4xl font-mon-bold tracking-wider',
        )}>
        firstpich
      </Text>
    </View>
  );
};

export default SplashScreenMain;
