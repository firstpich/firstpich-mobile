import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";

type GenderCardProps = {
  genre: string;
  onPress?: (() => void) | undefined;
  selected: boolean;
  className?: string;
};

const GenreCard: React.FC<GenderCardProps> = ({
  genre,
  onPress = () => {},
  selected,
  className = "",
}) => {
  const tailwind = useTailwind();
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={tailwind(
          `flex rounded-full justify-center items-center bg-primary-color-10 text-green-500 ${className} 
          ${selected ? "bg-primary-color-10" : "bg-primary-color-80"}`,
        )}>
        <Text
          style={tailwind(`font-mon-medium text-xl text-green-500 px-10 py-3
         ${selected ? "text-white" : "text-primary-color-10"}`)}>
          {genre}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GenreCard;
