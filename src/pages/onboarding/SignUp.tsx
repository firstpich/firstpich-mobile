import React, { useEffect, useState } from "react";
import { View, Text, StatusBar } from "react-native";
import { useTailwind } from "tailwind-rn";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useMutation } from "@apollo/client";

import { SENDOTP } from "@src/gql/auth";
import { SendOTP, SendOTPVariables } from "@generated/SendOTP";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import type { RootStackParamList } from "@src/routes";

import FpButton from "@components/common/Button";
import BackButton from "@components/common/BackButton";
import PhoneNumberInputField from "@components/onboarding/signup-screen/PhoneNumberInputField";

type GetStartedNavigationProps = StackNavigationProp<
  RootStackParamList,
  "SignUp"
>;

const SignUp = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation<GetStartedNavigationProps>();
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [signUp, { error, loading, reset }] = useMutation<
    SendOTP,
    SendOTPVariables
  >(SENDOTP, {
    errorPolicy: "all",
  });

  useEffect(() => {
    reset();
  }, [phoneNumber, reset]);

  const thereIsGraphQLError =
    (error && error.graphQLErrors.length !== 0) || false;
  const thereIsNetworkError = (error && error.networkError) || false;

  let errorText = "";

  if (thereIsGraphQLError) {
    errorText = "Please check entered phone number";
  } else if (thereIsNetworkError) {
    errorText = "Please check your network and try again";
  }

  const onPressLoginButton = () => {
    signUp({
      variables: {
        phone: {
          phone: phoneNumber,
        },
      },
    }).then(({ errors }) => {
      if (!errors) {
        navigation.navigate("OtpPage", { phone: phoneNumber });
      }
    });
  };

  return (
    <SafeAreaView style={tailwind("bg-primary h-full")}>
      <View style={tailwind("p-2 m-2")}>
        <BackButton onPress={() => navigation.pop()} />
      </View>
      <KeyboardAwareScrollView
        extraScrollHeight={125}
        keyboardOpeningTime={Number.MAX_SAFE_INTEGER}>
        <StatusBar backgroundColor="#0F0F0F" translucent={false} />
        <View style={tailwind("flex justify-center ml-4 mt-36 relative")}>
          <Text style={tailwind("text-white font-mon-light text-4xl mb-1")}>
            welcome to
          </Text>
          <Text
            style={tailwind(
              "text-white font-mon-bold text-4xl tracking-wider",
            )}>
            firstpich
          </Text>
          <Text
            style={tailwind("text-white font-mon-light text-sm mt-2 w-11/12")}>
            firstpich is full of wonders and we know you are excited as much as
            we are excited
          </Text>
        </View>

        <PhoneNumberInputField
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          errorText={errorText}
        />

        <View style={tailwind("mb-6")}>
          <FpButton
            title="Login"
            className="mx-4"
            disabled={loading}
            loading={loading}
            onPress={onPressLoginButton}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
