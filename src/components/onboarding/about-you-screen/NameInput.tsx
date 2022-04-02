import React from "react";
import { Text, TextInput, View } from "react-native";
import { useTailwind } from "tailwind-rn";

type NameInputProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  errorText: string | null;
};

const NameInput: React.FC<NameInputProps> = ({
  name,
  setName,
  errorText = "",
}) => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind("w-full")}>
      <Text style={tailwind("text-white text-4xl font-mon-bold mb-4 mx-6")}>
        About You
      </Text>
      <TextInput
        placeholder="Your Name"
        placeholderTextColor="#FFFFFF"
        keyboardType="default"
        autoComplete="name"
        value={name}
        onChangeText={text => setName(text)}
        style={tailwind(
          "bg-input-fields-bg rounded-md text-white p-3 text-lg mx-5 " +
            (errorText ? "border-red-500 border" : ""),
        )}
      />
      {errorText && (
        <Text style={tailwind("mt-2 text-red-500 ml-6 text-xs")}>
          {errorText}
        </Text>
      )}
    </View>
  );
};

export default NameInput;
