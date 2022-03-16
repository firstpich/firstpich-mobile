import React, {useState} from 'react';
import {View, Text, ImageBackground, Dimensions, Alert} from 'react-native';
import {useTailwind} from 'tailwind-rn';

import Carousel from 'react-native-snap-carousel';
import Dots from 'react-native-dots-pagination';

import FpLogo from '../../assets/icons/fpLogo.svg';
import BgShade from '../../assets/icons/bgShade.png';
import FpButton from '../components/Button';

const carouselWords = [
  'Create audiobook right from your hand and earn.',
  'Create audiobook right from your hand and earn.',
  'Create audiobook right from your hand and earn.',
  'Create audiobook right from your hand and earn.',
];

const Home = () => {
  const tailwind = useTailwind();
  const [carouselRef, setCarouselRef] = useState<Carousel<string> | null>(null);

  const renderItem = ({item}: {item: string}) => (
    <View style={tailwind('')}>
      <Text style={tailwind('text-white')}>{item}</Text>
    </View>
  );

  return (
    <View style={tailwind('bg-primary h-full')}>
      <View style={tailwind('h-full w-full')}>
        <View style={tailwind('flex flex-col justify-center h-full')}>
          <View style={tailwind('flex flex-row items-center pl-4 -mt-20')}>
            <FpLogo width={38} height={38} />
            <Text style={tailwind('ml-3 text-white font-mon-bold text-3xl')}>
              firstpich
            </Text>
          </View>

          <View style={tailwind('flex flex-row items-center px-4 mt-32')}>
            <Carousel
              ref={r => setCarouselRef(r)}
              layout={'default'}
              data={carouselWords}
              renderItem={renderItem}
              sliderWidth={Dimensions.get('window').width - 40}
              itemWidth={Dimensions.get('window').width - 40}
              autoplay={true}
              enableMomentum={false}
              lockScrollWhileSnapping={true}
              loop={true}
            />
          </View>
          <Dots length={4} active={1} />
        </View>
        <View style={tailwind('absolute w-full bottom-6')}>
          <FpButton
            title="Next"
            className="mx-4"
            onPress={() => {
              Alert.alert(String(carouselRef?.currentIndex));
            }}
          />
        </View>
      </View>
      <ImageBackground
        source={BgShade}
        style={{
          ...tailwind('flex-1 justify-center opacity-20'),
        }}
      />
    </View>
  );
};

export default Home;
