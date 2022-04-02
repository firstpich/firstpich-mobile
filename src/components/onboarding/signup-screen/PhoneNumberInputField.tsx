import React from "react";
import { View, Text, TextInput } from "react-native";
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
      <View style={tailwind("flex flex-row")}>
        <View style={tailwind("absolute top-0 z-10 p-4 rounded-l-md")}>
          <Text style={tailwind("text-white font-mon-semibold")}>+91</Text>
        </View>
        <View style={tailwind("pl-8 bg-input-fields-bg rounded-md w-full")}>
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor="#FFFFFF"
            keyboardType="number-pad"
            maxLength={10}
            autoComplete="tel"
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
            // textAlign="center"
            style={tailwind(
              "text-white p-4 font-mon-semibold " +
                (errorText ? "border-red-500 border" : ""),
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
