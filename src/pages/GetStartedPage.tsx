import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {useTailwind} from 'tailwind-rn';

import GetStartedBg from '../../assets/icons/getStartedBg.png';
import FpButton from '../components/Button';

const Home = () => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('bg-primary h-full')}>
      <ImageBackground source={GetStartedBg}>
        <View style={tailwind('flex flex-col justify-center h-full')}>
          <View
            style={tailwind('flex flex-row items-center justify-center mt-40')}>
            <Text style={tailwind('ml-3 text-white font-mon-bold text-3xl')}>
              firstpich
            </Text>
          </View>
          <View style={tailwind('flex-1 items-center justify-center -mt-56')}>
            <Text
              style={tailwind(
                'ml-3 text-white w-48 text-center font-mon-bold text-lg',
              )}>
              Stories just for you to listen & read
            </Text>
          </View>
        </View>
        <View style={tailwind('absolute w-full bottom-6')}>
          <FpButton title="Get Started" className="mx-4" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
