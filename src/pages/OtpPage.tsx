import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootStackParamList} from '../App';

import FpButton from '../components/Button';
import BackButton from '../components/BackButton';
import {gql, useMutation} from '@apollo/client';

export type OtpPageParams = {
  phone: string;
};

const LOGIN = gql`
  mutation login($phoneOtp: PhoneOTP!) {
    login(phoneOtp: $phoneOtp) {
      loggedIn
      nonOnboardedToken
      user {
        phone
      }
      tokens {
        accessToken
        refreshToken
      }
    }
  }
`;

type GetStartedNavigationProps = StackNavigationProp<
  RootStackParamList,
  'OtpPage'
>;

const OtpPage = () => {
  const navigation = useNavigation<GetStartedNavigationProps>();
  const {
    params: {phone},
  } = useRoute<RouteProp<RootStackParamList, 'OtpPage'>>();
  const tailwind = useTailwind();

  const [otp, setOtp] = useState<string>('');

  const [login, {data, error, loading}] = useMutation(LOGIN, {
    errorPolicy: 'all',
  });

  const otpRequestFailed = (data && data.login.loggedIn === false) || false;
  const thereIsGraphQLError =
    (error && error.graphQLErrors.length !== 0) || false;
  const thereIsNetworkError = (error && error.networkError) || false;
  const thereIsError =
    otpRequestFailed || thereIsNetworkError || thereIsGraphQLError;

  const onPressEnterOTP = () => {
    login({
      variables: {
        phoneOtp: {
          phone,
          otp,
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-shadow
    }).then(({data, errors}) => {
      if (!errors && data.login.loggedIn === true) {
        navigation.navigate('AboutYouPage');
      }
    });
  };

  const SignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={tailwind('bg-primary h-full')}>
      <View style={tailwind('p-2 m-2')}>
        <BackButton onPress={SignUp} />
      </View>
      <View style={tailwind('flex items-center -mt-12')}>
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
            onChangeText={text => setOtp(text)}
            value={otp}
            style={tailwind(
              'bg-input-fields-bg rounded-md w-10/12 text-white text-2xl h-14 ' +
                (thereIsError ? 'border-red-500 border' : ''),
            )}
          />
        </View>
        {thereIsError && (
          <Text style={tailwind('mt-2 text-red-500 ml-10 text-xs')}>
            OTP is invalid
          </Text>
        )}
        <Text style={tailwind('mt-2 text-white ml-10 text-sm')}>
          You will recieve an OTP on the above number
        </Text>
      </View>
      <View style={tailwind('mb-6')}>
        <FpButton
          title="Enter OTP"
          className="mx-4"
          disabled={loading}
          onPress={onPressEnterOTP}
        />
      </View>
      <View style={tailwind('flex flex-row justify-center items-center py-5')}>
        <Text style={tailwind('mr-1 text-white')}>Haven’t recieved yet?</Text>
        <TouchableOpacity disabled={loading}>
          <Text style={tailwind('font-mon-bold text-white')}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpPage;
