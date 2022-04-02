import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useTailwind } from "tailwind-rn";
import Toast from "react-native-simple-toast";

import { useMutation, useQuery } from "@apollo/client";
import { LOGIN, RUNTIME_CONFIG, SIGNUP } from "@src/gql/auth";

import { database } from "@db/index";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { LoginContext } from "@src/App";
import type { RootStackParamList } from "@src/routes";

import EnterOtpButton from "@components/common/Button";
import BackButton from "@components/common/BackButton";
import OtpInputField from "@components/onboarding/otp-screen/OtpInputField";
import HeaderText from "@components/onboarding/otp-screen/HeaderText";

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
  const [resendIn, setResendIn] = useState<number>(30);

  const { setIsLoggedIn } = useContext(LoginContext);

  const [login, { data, error, loading }] = useMutation(LOGIN, {
    errorPolicy: "all",
  });

  const [resendOtp, { loading: resendOtpLoading }] = useMutation(SIGNUP, {
    errorPolicy: "all",
  });

  const { data: rateLimits } = useQuery(RUNTIME_CONFIG);

  useEffect(() => {
    const t = setInterval(() => {
      setResendIn(r => (r > 0 ? r - 1 : r));
    }, 1000);
    return () => clearInterval(t);
  }, [setResendIn]);

  const otpRequestFailed = (data && data.login.loggedIn === false) || false;
  const thereIsGraphQLError =
    (error && error.graphQLErrors.length !== 0) || false;
  const thereIsNetworkError = (error && error.networkError) || false;
  const thereIsError =
    otpRequestFailed || thereIsNetworkError || thereIsGraphQLError;

  const onPressResendOTP = () => {
    resendOtp({
      variables: {
        phone: {
          phone,
        },
      },
    })
      .then(() => {
        setOtp("");
        setResendIn(
          rateLimits.runtimeConfig.rate_limits.send_otp_ip_rate_limit.duration,
        );
        Toast.show("OTP sent successfully!");
      })
      .catch(console.log);
  };

  const onPressEnterOTP = () => {
    login({
      variables: {
        phoneOtp: {
          phone,
          otp,
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-shadow
    }).then(async ({ data: { login }, errors }) => {
      if (errors || login.loggedIn !== true) {
        return;
      }

      if (login.user === null || login.tokens === null) {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: "AboutYouPage",
              params: { nonOnboardedToken: login.nonOnboardedToken },
            },
          ],
        });
      } else {
        await database.adapter.setLocal("tokens", JSON.stringify(login.tokens));
        setIsLoggedIn(true);

        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
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
        <TouchableOpacity
          onPress={onPressResendOTP}
          disabled={resendIn !== 0 || resendOtpLoading}>
          <Text style={tailwind("font-mon-bold text-white py-2")}>
            {resendIn === 0 ? "Resend OTP" : "Resend in " + resendIn}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OtpPage;
