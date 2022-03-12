import React from 'react';
import {View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import Button from '../components/Button';
import Svgtest from '../icons/fp.svg';

const SplashScreenMain = () => {
  const tailwind = useTailwind();
  return (
    <View
      style={tailwind(
        'flex-1 justify-center items-center bg-primary font-montserrat',
      )}>
      <Svgtest width={100} height={100} />
      <Text style={tailwind('text-white text-3xl mt-4 font-bold')}>
        firstpich
      </Text>
      <Button title="Firstpich" />
    </View>
  );
};

export default SplashScreenMain;
