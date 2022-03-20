import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useTailwind} from 'tailwind-rn';

import {useNavigation} from '@react-navigation/native';
import {gql, useMutation} from '@apollo/client';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootStackParamList} from '../App';

import FpButton from '../components/Button';
import BackButton from '../components/BackButton';

type GetStartedNavigationProps = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

const SIGNUP = gql`
  mutation sendOTP($phone: Phone!) {
    sendOTP(phone: $phone)
  }
`;

const SignUp = () => {
  const navigation = useNavigation<GetStartedNavigationProps>();
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const tailwind = useTailwind();

  const [signUp, {error, loading}] = useMutation(SIGNUP, {
    errorPolicy: 'all',
  });

  const thereIsError = (error && error.graphQLErrors.length !== 0) || false;

  const onPressLoginButton = () => {
    signUp({
      variables: {
        phone: {
          phone: mobileNumber,
        },
      },
    }).then(({errors}) => {
      if (!errors) {
        navigation.navigate('OtpPage', {phone: mobileNumber});
      }
    });
  };

  const GetStartedPage = () => {
    navigation.navigate('GetStartedPage');
  };

  return (
    <View style={tailwind('bg-primary h-full')}>
      <View style={tailwind('p-2 m-2')}>
        <BackButton onPress={GetStartedPage} />
      </View>
      <View style={tailwind('flex justify-center ml-4 mt-36 relative')}>
        <Text style={tailwind('text-white font-mon-light text-4xl mb-1')}>
          welcome to
        </Text>
        <Text
          style={tailwind('text-white font-mon-bold text-4xl tracking-wider')}>
          firstpich
        </Text>
        <Text style={tailwind('text-white font-mon-thin text-sm mt-2 w-11/12')}>
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
              'bg-input-fields-bg rounded-md w-11/12 text-white p-3 pl-10 text-base ' +
                (thereIsError ? 'border-red-500 border' : ''),
            )}
          />
        </View>
        {thereIsError && (
          <Text style={tailwind('mt-2 text-red-500 ml-0.5 text-xs')}>
            Entered phone number looks invalid
          </Text>
        )}
        <Text style={tailwind('mt-2 text-white ml-0.5 text-xs')}>
          You will recieve an OTP on the above number
        </Text>
      </View>
      <View style={tailwind('mb-6')}>
        <FpButton
          title="Login"
          className="mx-4"
          disabled={loading}
          onPress={onPressLoginButton}
        />
      </View>
    </View>
  );
};

export default SignUp;
