import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootStackParamList} from '../App';

import FpButton from '../components/Button';
import AppBar from '../components/AppBar';
import GenderCard from '../components/GenderCard';

type GetStartedNavigationProps = StackNavigationProp<
  RootStackParamList,
  'AboutYouPage'
>;

const AboutYouPage = () => {
  const navigation = useNavigation<GetStartedNavigationProps>();
  const tailwind = useTailwind();

  return (
    <View style={tailwind('bg-primary h-full')}>
      <AppBar onPress={() => navigation.navigate('SignUp')} />
      <View style={tailwind('flex items-start py-12 ml-5')}>
        <Text style={tailwind('text-white text-4xl font-mon-bold mb-4')}>
          About You
        </Text>
        <TextInput
          placeholder="Your Name"
          placeholderTextColor="#FFFFFF"
          keyboardType="default"
          autoComplete="name"
          style={tailwind(
            'bg-input-fields-bg rounded-md w-96 text-white p-3 text-base',
          )}
        />
        <Text style={tailwind('text-white text-lg font-mon-medium mb-4 mt-8')}>
          How do you identify?
        </Text>
        <GenderCard genderType="Male" />
      </View>
      <View style={tailwind('absolute w-full bottom-6')}>
        <FpButton
          title="Next"
          className="mx-4"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default AboutYouPage;
