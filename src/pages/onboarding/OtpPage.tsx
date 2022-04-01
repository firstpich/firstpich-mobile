import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useTailwind } from "tailwind-rn";

import { useMutation } from "@apollo/client";
import { LOGIN } from "../../gql/auth";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../routes";

import EnterOtpButton from "../../components/common/Button";
import BackButton from "../../components/common/BackButton";
import OtpInputField from "../../components/onboarding/otp-screen/OtpInputField";
import HeaderText from "../../components/onboarding/otp-screen/HeaderText";

export type OtpPageParams = {
  phone: string;
};

type GetStartedNavigationProps = StackNavigationProp<
  RootStackParamList,
  "OtpPage"
>;

const OtpPage = () => {
  const tailwind = useTailwind();

  const navigation = useNavigation<GetStartedNavigationProps>();
  const {
    params: { phone },
  } = useRoute<RouteProp<RootStackParamList, "OtpPage">>();

  const [otp, setOtp] = useState<string>("");

  const [login, { data, error, loading }] = useMutation(LOGIN, {
    errorPolicy: "all",
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
    }).then(({ data: { login }, errors }) => {
      if (!errors && login.loggedIn === true) {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: "AboutYouPage",
              params: { nonOnboardedToken: login.nonOnboardedToken },
            },
          ],
        });
      }
    });
  };

  const SignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView style={tailwind("bg-primary h-full")}>
      <View style={tailwind("p-2 m-2")}>
        <BackButton onPress={SignUp} />
      </View>
      <HeaderText
        className="-mt-12"
        otpText="One step closer! Check your text, we have sent you a verification code"
      />
      <OtpInputField
        otp={otp}
        setOtp={setOtp}
        errorText={thereIsError ? "OTP is invalid" : ""}
        className="py-12"
      />
      <View style={tailwind("mb-6")}>
        <EnterOtpButton
          title="Enter OTP"
          className="mx-4"
          disabled={loading}
          onPress={onPressEnterOTP}
        />
      </View>
      <View style={tailwind("flex flex-row justify-center items-center py-5")}>
        <Text style={tailwind("mr-1 text-white")}>Haven’t recieved yet?</Text>
        <TouchableOpacity disabled={loading}>
          <Text style={tailwind("font-mon-bold text-white")}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OtpPage;
