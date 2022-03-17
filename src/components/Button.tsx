import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';

type ButtonProps = {
  title: string;
};

const FpButton: React.FC<ButtonProps> = ({title}) => {
  const tailwind = useTailwind();
  return (
    <TouchableOpacity>
      <View
        style={tailwind(
          'flex bg-white w-72 h-12 rounded-3xl justify-center items-center',
        )}>
        <Text style={tailwind('text-black font-bold text-lg')}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FpButton;
