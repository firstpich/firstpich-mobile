import React from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootStackParamList} from '../App';

import FpButton from '../components/Button';
// import BackButton from '../components/BackButton';
import AppBar from '../components/AppBar';
import OtpPage from './OtpPage';

type GetStartedNavigationProps = StackNavigationProp<
  RootStackParamList,
  'AboutYouPage'
>;

const AboutYouPage = () => {
  const navigation = useNavigation<GetStartedNavigationProps>();
  const tailwind = useTailwind();

  return (
    <View style={tailwind('bg-primary h-full')}>
      <AppBar />
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
