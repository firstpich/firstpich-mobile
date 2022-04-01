import React from "react";
import { Text, TextInput, View } from "react-native";
import { useTailwind } from "tailwind-rn";

type OtpInputProps = {
  otp: string;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
  errorText?: string;
  className?: string;
};

const OtpInputField: React.FC<OtpInputProps> = ({
  otp,
  setOtp,
  errorText = "",
  className = "",
}) => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("flex justify-center " + className)}>
      <View style={tailwind("flex items-center")}>
        <TextInput
          placeholder="OTP"
          placeholderTextColor="#FFFFFF"
          keyboardType="number-pad"
          maxLength={6}
          textAlign="center"
          onChangeText={text => setOtp(text)}
          value={otp}
          style={tailwind(
            "bg-input-fields-bg rounded-md w-10/12 text-white text-2xl h-14 " +
              (errorText ? "border-red-500 border" : ""),
          )}
        />
      </View>
      {errorText ? (
        <Text style={tailwind("mt-2 text-red-500 ml-10 text-xs")}>
          {errorText}
        </Text>
      ) : (
        <></>
      )}
      <Text style={tailwind("mt-2 text-white ml-10 text-sm")}>
        You will recieve an OTP on the above number
      </Text>
    </View>
  );
};

export default OtpInputField;
