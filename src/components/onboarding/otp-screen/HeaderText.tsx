import React from "react";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

type HeaderProps = {
  className: string;
  otpText: string;
};

const HeaderText: React.FC<HeaderProps> = ({
  className = "",
  otpText = "",
}) => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind("flex items-center " + className)}>
      <View style={tailwind("flex mt-36")}>
        <Text
          style={tailwind(
            "text-white text-center font-mon-bold text-xl mt-2 mb-8 w-96",
          )}>
          {otpText}
        </Text>
      </View>
    </View>
  );
};

export default HeaderText;
