import React from "react";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

import FirstPichLogo from "@assets/icons/fpLogo.svg";

const FirstPichLogoText = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind("flex flex-row items-center pl-3 -mt-20")}>
      <FirstPichLogo width={38} height={38} />
      <Text style={tailwind("ml-3 text-white font-mon-bold text-3xl")}>
        firstpich
      </Text>
    </View>
  );
};

export default FirstPichLogoText;
