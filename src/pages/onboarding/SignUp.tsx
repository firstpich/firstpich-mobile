import React, { useState } from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

import { gql, useMutation } from "@apollo/client";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import type { RootStackParamList } from "../../routes";

import FpButton from "../../components/common/Button";
import BackButton from "../../components/common/BackButton";
import PhoneNumberInputField from "../../components/onboarding/signup-screen/PhoneNumberInputField";
import { SafeAreaView } from "react-native-safe-area-context";

type GetStartedNavigationProps = StackNavigationProp<
  RootStackParamList,
  "SignUp"
>;

const SIGNUP = gql`
  mutation sendOTP($phone: Phone!) {
    sendOTP(phone: $phone)
  }
`;

const SignUp = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation<GetStartedNavigationProps>();
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [signUp, { error, loading }] = useMutation(SIGNUP, {
    errorPolicy: "all",
  });

  const thereIsGraphQLError =
    (error && error.graphQLErrors.length !== 0) || false;
  const thereIsNetworkError = (error && error.networkError) || false;
  const thereIsError = thereIsNetworkError || thereIsGraphQLError;

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
      <View style={tailwind("flex justify-center ml-4 mt-36 relative")}>
        <Text style={tailwind("text-white font-mon-light text-4xl mb-1")}>
          welcome to
        </Text>
        <Text
          style={tailwind("text-white font-mon-bold text-4xl tracking-wider")}>
          firstpich
        </Text>
        <Text style={tailwind("text-white font-mon-thin text-sm mt-2 w-11/12")}>
          firstpich is full of wonders and we know you are excited as much as we
          are excited
        </Text>
      </View>

      <PhoneNumberInputField
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        errorText={thereIsError ? "Please check entered phone number" : ""}
      />

      <View style={tailwind("mb-6")}>
        <FpButton
          title="Login"
          className="mx-4"
          disabled={loading}
          onPress={onPressLoginButton}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
