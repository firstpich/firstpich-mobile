import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';

type ButtonProps = {
  title: string;
  className?: string;
  onPress?: (() => void) | undefined;
};

const FpButton: React.FC<ButtonProps> = ({
  title,
  className = '',
  onPress = () => {},
}) => {
  const tailwind = useTailwind();
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={tailwind(
          'flex bg-white p-2 rounded-3xl justify-center items-center ' +
            className,
        )}>
        <Text style={tailwind('text-black font-bold text-lg')}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FpButton;
