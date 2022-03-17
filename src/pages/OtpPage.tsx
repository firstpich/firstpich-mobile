import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../App';

import FpButton from '../components/Button';

type GetStartedNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'OtpPage'
>;

const OtpPage = () => {
  const navigation = useNavigation<GetStartedNavigationProps>();
  const tailwind = useTailwind();

  return (
    <View style={tailwind('bg-primary h-full')}>
      <View style={tailwind('flex items-center mt-6')}>
        <Text
          style={tailwind('text-white font-mon-bold text-xl tracking-wider')}>
          firstpich
        </Text>
        <View style={tailwind('flex mt-36')}>
          <Text
            style={tailwind(
              'text-white text-center font-mon-bold text-xl mt-2 mb-8 w-96',
            )}>
            One step closer! Check your text, we have sent you a verification
            code
          </Text>
        </View>
      </View>
      <View style={tailwind('flex justify-center py-12')}>
        <View style={tailwind('flex items-center')}>
          <TextInput
            placeholder="OTP"
            placeholderTextColor="#FFFFFF"
            keyboardType="number-pad"
            maxLength={6}
            textAlign="center"
            style={tailwind(
              'bg-input-fields-bg rounded-md w-10/12 text-white text-2xl h-14',
            )}
          />
        </View>
        <Text style={tailwind('mt-2 text-white ml-10 text-sm')}>
          You will recieve an OTP on the above number
        </Text>
      </View>
      <View style={tailwind('mb-6')}>
        <FpButton
          title="Enter OTP"
          className="mx-4"
          onPress={() => navigation.navigate('OtpPage')}
        />
      </View>
      <View style={tailwind('flex flex-row justify-center items-center py-5')}>
        <Text style={tailwind('mr-1')}>Haven’t recieved yet?</Text>
        <TouchableOpacity>
          <Text style={tailwind('font-mon-bold ')}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpPage;
