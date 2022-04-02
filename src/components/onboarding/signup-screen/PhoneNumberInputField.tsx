import React from "react";
import { View, Text, TextInput, Platform } from "react-native";
import { useTailwind } from "tailwind-rn";

type PhoneNumberInputProps = {
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  errorText?: string;
};

const PhoneNumberInputField: React.FC<PhoneNumberInputProps> = ({
  phoneNumber,
  setPhoneNumber,
  errorText = "",
}) => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("flex mx-4 py-12")}>
      <View
        style={tailwind(
          "flex flex-row bg-input-fields-bg rounded-md " +
            (errorText ? "border-red-500 border" : ""),
        )}>
        <View style={tailwind("flex justify-center pl-4 z-10")}>
          <Text style={tailwind("text-white text-lg font-mon-semibold")}>
            +91
          </Text>
        </View>
        <View style={tailwind("rounded-r-md w-full ")}>
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor="#FFFFFF"
            keyboardType="number-pad"
            maxLength={10}
            autoComplete="tel"
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
            style={tailwind(
              `text-white p-4 font-mon-semibold text-lg ${
                Platform.OS === "ios" ? "-mt-2" : ""
              }`,
            )}
          />
        </View>
      </View>
      {errorText ? (
        <Text style={tailwind("mt-2 text-red-500 ml-0.5 text-xs")}>
          {errorText}
        </Text>
      ) : (
        <></>
      )}
      <Text style={tailwind("mt-2 text-white ml-0.5 text-xs")}>
        You will recieve an OTP on the above number
      </Text>
    </View>
  );
};

export default PhoneNumberInputField;
