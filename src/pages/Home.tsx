import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {useTailwind} from 'tailwind-rn';

import FpLogo from '../icons/fpLogo.svg';
import BgShade from '../icons/bgShade.png';

const Home = () => {
  const tailwind = useTailwind();
  return (
    <React.Fragment>
      <View style={tailwind('bg-primary relative h-full')}>
        <View
          style={tailwind(
            'absolute w-full flex h-full items-center justify-center',
          )}>
          <FpLogo width={40} height={40} />
          <Text style={tailwind('text-white font-mon-bold text-2xl')}>
            firstpich
          </Text>
        </View>
        <ImageBackground
          source={BgShade}
          style={{
            ...tailwind('flex-1 justify-center opacity-20'),
          }}
        />
      </View>
    </React.Fragment>
  );
};

export default Home;
