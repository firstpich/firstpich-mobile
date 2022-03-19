import React from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../App';

import FpButton from '../components/Button';
import BackButton from '../components/BackButton';

type GetStartedNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'AboutYouPage'
>;

const AboutYouPage = () => {
  const navigation = useNavigation<GetStartedNavigationProps>();
  const tailwind = useTailwind();

  return (
    <View style={tailwind('bg-primary h-full')}>
      <View style={tailwind('mt-16')}>
        <BackButton onPress={() => navigation.navigate('OtpPage')} />
      </View>
      <View style={tailwind('absolute w-full bottom-6')}>
        <FpButton
          title="This is about you page"
          className="mx-4"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default AboutYouPage;
