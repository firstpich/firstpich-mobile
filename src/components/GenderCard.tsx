import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';

type GenderCardProps = {
  genderType: string;
  boxColor?: string;
  textColor?: string;
  onPress?: (() => void) | undefined;
};

const GenderCard: React.FC<GenderCardProps> = ({
  genderType,
  textColor = '',
  boxColor = '',
  onPress = () => {},
}) => {
  const tailwind = useTailwind();
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={tailwind(
          'flex w-28 h-24 rounded-lg justify-center items-center mr-5 ' +
            boxColor,
        )}>
        <Text style={tailwind('font-mon-medium text-2xl ' + textColor)}>
          {genderType}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GenderCard;
