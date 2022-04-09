import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { useTailwind } from "tailwind-rn";

import Icon from "react-native-remix-icon";

type ButtonProps = {
  title?: string;
  showBack?: boolean;
  onPress?: (() => void) | undefined;
  className: string;
};

const AppBar: React.FC<ButtonProps> = ({
  title = "firstpich",
  onPress = () => {},
  showBack = true,
  className,
}) => {
  const tailwind = useTailwind();
  return (
    <View
      style={tailwind(
        `flex flex-row items-center justify-center ${
          Platform.OS === "android" ? "p-2 m-4" : ""
        }`,
      )}>
      {showBack && (
        <TouchableOpacity
          onPress={onPress}
          style={tailwind("absolute left-0 flex items-center justify-center")}>
          <Icon name="ri-arrow-down-s-line" size="40" color="white" />
        </TouchableOpacity>
      )}
      <View>
        <Text style={tailwind("text-white " + className)}>{title}</Text>
      </View>
    </View>
  );
};

export default AppBar;
