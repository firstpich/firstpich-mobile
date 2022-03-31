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
          onChangeText={text => setPhoneNumber(text)}
          value={phoneNumber}
          style={tailwind(
            "bg-input-fields-bg rounded-md w-11/12 text-white p-3 pl-10 text-base " +
              (errorText ? "border-red-500 border" : ""),
          )}
        />
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
