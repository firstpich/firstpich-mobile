import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn';

type GenderCardProps = {
  genderType: string;
  onPress?: (() => void) | undefined;
  selected: boolean;
  className?: string;
};

const GenderCard: React.FC<GenderCardProps> = ({
  genderType,
  onPress = () => { },
  className = '',
  selected,
}) => {
  const tailwind = useTailwind();
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={tailwind(
          `flex w-28 h-24 rounded-lg justify-center items-center ${className} 
          ${selected ? 'bg-primary-color-10' : 'bg-primary-color-80'}`,
        )}>
        <Text
          style={tailwind(`font-mon-medium text-xl
          ${selected ? 'text-white' : 'text-primary-color-10'}`)}>
          {genderType}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GenderCard;
