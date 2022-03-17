import React from 'react';
<<<<<<< HEAD
import {View, Text, ImageBackground} from 'react-native';
import {useTailwind} from 'tailwind-rn';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import type {RootStackParamList} from '../App';
import GetStartedBg from '../../assets/icons/getStartedBg.png';
import FpButton from '../components/Button';

type GetStartedNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'GetStartedPage'
>;

const GetStartedPage = () => {
  const navigation = useNavigation<GetStartedNavigationProps>();
=======
import {View, Text, ImageBackground, Alert} from 'react-native';
import {useTailwind} from 'tailwind-rn';

import GetStartedBg from '../../assets/icons/getStartedBg.png';
import FpButton from '../components/Button';

const Home = () => {
>>>>>>> 3dc0a1e (feat: made get started page (#9))
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
<<<<<<< HEAD
          <View style={tailwind('flex-1 items-center justify-center -mt-56')}>
            <Text
              style={tailwind(
                'ml-3 text-white w-48 text-center font-mon-bold text-lg',
=======
          <View style={tailwind('flex-1 items-center justify-center -mt-24')}>
            <Text
              style={tailwind(
                'ml-3 text-white w-48 text-center font-mon-bold',
>>>>>>> 3dc0a1e (feat: made get started page (#9))
              )}>
              Stories just for you to listen & read
            </Text>
          </View>
        </View>
        <View style={tailwind('absolute w-full bottom-6')}>
<<<<<<< HEAD
          <FpButton
            title="Get Started"
            className="mx-4"
            onPress={() => navigation.navigate('SignUp')}
          />
=======
          <FpButton title="Get Started" className="mx-4" />
>>>>>>> 3dc0a1e (feat: made get started page (#9))
        </View>
      </ImageBackground>
    </View>
  );
};

<<<<<<< HEAD
export default GetStartedPage;
=======
export default Home;
>>>>>>> 3dc0a1e (feat: made get started page (#9))
