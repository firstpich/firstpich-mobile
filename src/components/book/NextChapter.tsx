import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { useTailwind } from "tailwind-rn";

import vector from "@assets/icons/Vector.png";
import Icon from "react-native-remix-icon";
import TextTicker from "react-native-text-ticker";

const NextChapter = () => {
  const tailwind = useTailwind();
  return (
    <View
      style={tailwind(
        "flex flex-row bg-primary-color-80 items-center rounded-md",
      )}>
      <View style={tailwind("p-3")}>
        <ImageBackground source={vector} style={tailwind("w-6 h-6")} />
      </View>
      <View style={tailwind("mx-2")}>
        <Text style={tailwind("text-secondary-orange")}>Next Chapter</Text>
        <TextTicker
          style={{ fontSize: 18, width: 60 }}
          duration={3000}
          loop
          bounce
          repeatSpacer={50}
          marqueeDelay={1000}>
          Super long piece of text is long. The quick brown fox jumps over the
          lazy dog.
        </TextTicker>
      </View>
      <TouchableOpacity style={tailwind("")}>
        <Icon name="ri-arrow-right-s-line" size="32" color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default NextChapter;
