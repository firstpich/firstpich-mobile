import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useTailwind} from 'tailwind-rn';

import FpButton from '../components/Button';

const SignUp = () => {
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const tailwind = useTailwind();

  return (
    <View style={tailwind('bg-primary h-full')}>
      <View style={tailwind('flex justify-center ml-4 mt-40 relative')}>
        <Text style={tailwind('text-white font-mon-light text-4xl mb-1')}>
          welcome to
        </Text>
        <Text
          style={tailwind('text-white font-mon-bold text-4xl tracking-wider')}>
          firstpich
        </Text>
        <Text
          style={tailwind('text-white font-mon-light text-sm mt-2 w-11/12')}>
          firstpich is full of wonders and we know you are excited as much as we
          are excited
        </Text>
      </View>

      <View style={tailwind('flex justify-center ml-4 py-12')}>
        <View>
          <Text
            style={tailwind(
              'text-white font-mon-semibold absolute z-10 h-12 mt-4 ml-2 pt-px',
            )}>
            +91
          </Text>
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor="#FFFFFF"
            keyboardType="number-pad"
            maxLength={10}
            autoComplete="tel"
            onChangeText={text => setMobileNumber(text)}
            value={mobileNumber}
            style={tailwind(
              'bg-input-fields-bg rounded-md w-11/12 text-white p-3 pl-10 text-base',
            )}
          />
        </View>
        <Text style={tailwind('mt-2 text-white ml-0.5 text-xs')}>
          You will recieve an OTP on the above number
        </Text>
      </View>
      <View style={tailwind('mb-6')}>
        <FpButton title="Login" className="mx-4" />
      </View>
    </View>
  );
};

export default SignUp;
