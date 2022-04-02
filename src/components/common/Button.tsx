import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useTailwind } from "tailwind-rn";

type ButtonProps = {
  title: string;
  className?: string;
  onPress?: (() => void) | undefined;
  disabled?: boolean;
  loading?: boolean;
};

const FpButton: React.FC<ButtonProps> = ({
  title,
  className = "",
  disabled = false,
  loading = false,
  onPress = () => {},
}) => {
  const tailwind = useTailwind();
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View
        style={tailwind(
          `flex flex-row p-3 rounded-3xl justify-center items-center ${
            loading ? "bg-input-fields-bg" : "bg-white"
          } ` + className,
        )}>
        {loading ? (
          <ActivityIndicator style={tailwind("mr-2")} color="#ffffff" />
        ) : (
          <Text style={tailwind("text-black font-bold text-lg")}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default FpButton;
