import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useTailwind } from "tailwind-rn";

type NumberInputProps = {
  signUpStateSetter: any;
};

const NumberInputField: React.FC<NumberInputProps> = ({
  signUpStateSetter,
}) => {
  const tailwind = useTailwind();

  const thereIsGraphQLError =
    (signUpStateSetter.error &&
      signUpStateSetter.error.graphQLErrors.length !== 0) ||
    false;
  const thereIsNetworkError =
    (signUpStateSetter.error && signUpStateSetter.error.networkError) || false;
  const thereIsError = thereIsNetworkError || thereIsGraphQLError;

  return (
    <View style={tailwind("flex justify-center ml-4 py-12")}>
      <View>
        <Text
          style={tailwind(
            "text-white font-mon-semibold absolute z-10 h-12 mt-4 ml-2 pt-px",
          )}>
          +91
        </Text>
        <TextInput
          placeholder="Mobile Number"
          placeholderTextColor="#FFFFFF"
          keyboardType="number-pad"
          maxLength={10}
          autoComplete="tel"
          onChangeText={text => signUpStateSetter.setMobileNumber(text)}
          value={signUpStateSetter.mobileNumber}
          style={tailwind(
            "bg-input-fields-bg rounded-md w-11/12 text-white p-3 pl-10 text-base " +
              (thereIsError ? "border-red-500 border" : ""),
          )}
        />
      </View>
      {thereIsError && (
        <Text style={tailwind("mt-2 text-red-500 ml-0.5 text-xs")}>
          Entered phone number looks invalid
        </Text>
      )}
      <Text style={tailwind("mt-2 text-white ml-0.5 text-xs")}>
        You will recieve an OTP on the above number
      </Text>
    </View>
  );
};

export default NumberInputField;
