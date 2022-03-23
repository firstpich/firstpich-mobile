import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';

type GenderCardProps = {
  genderType: string;
  className?: string;
  onPress?: (() => void) | undefined;
};

const GenderCard: React.FC<GenderCardProps> = ({
  genderType,
  className = '',
  onPress = () => {},
}) => {
  const tailwind = useTailwind();
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={tailwind(
          'flex bg-white p-3 rounded-sm justify-center items-center ' +
            className,
        )}>
        <Text style={tailwind('text-black font-bold text-lg')}>
          {genderType}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GenderCard;
