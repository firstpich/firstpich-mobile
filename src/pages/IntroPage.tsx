import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {useTailwind} from 'tailwind-rn';

import FpLogo from '../../assets/icons/fpLogo.svg';
import BgShade from '../../assets/icons/bgShade.png';

const Home = () => {
  const tailwind = useTailwind();
  return (
    <>
      <View style={tailwind('bg-primary h-full')}>
        <View
          style={tailwind('absolute h-full w-full flex px-4 justify-center')}>
          <View style={tailwind('flex flex-row items-center pl-4 -mt-20 ')}>
            <FpLogo width={38} height={38} />
            <Text style={tailwind('ml-3 text-white font-mon-bold text-3xl')}>
              firstpich
            </Text>
          </View>

          <View style={tailwind('flex flex-row items-center pl-4 mt-36')}>
            <FpLogo width={38} height={38} />
            <Text style={tailwind('ml-3 text-white font-mon-bold text-3xl')}>
              firstpich
            </Text>
          </View>

          <View style={tailwind('absolute bottom-0')}>
            <Text style={tailwind('ml-3 text-white font-mon-bold text-3xl')}>
              firstpich
            </Text>
          </View>
        </View>
        <ImageBackground
          source={BgShade}
          style={{
            ...tailwind('flex-1 justify-center opacity-20'),
          }}
        />
      </View>
    </>
  );
};

export default Home;
