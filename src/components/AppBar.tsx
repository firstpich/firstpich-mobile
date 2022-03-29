import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn';

import Icon from 'react-native-remix-icon';

type ButtonProps = {
  title?: string;
  className?: string;
  showBack?: boolean;
  onPress?: (() => void) | undefined;
};

const AppBar: React.FC<ButtonProps> = ({
  title = 'firstpich',
  className = '',
  onPress = () => { },
  showBack = true,
}) => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('p-2 m-2 flex flex-row items-center justify-center ' + className)}>
      {showBack && (
        <TouchableOpacity
          onPress={onPress}
          style={tailwind(
            'absolute left-0 flex items-center justify-center bg-primary-color-60 w-9 h-9 rounded-full',
          )}>
          <Icon
            name="ri-arrow-left-s-line"
            size="40"
            color="white"
            style={tailwind('mr-0.5')}
          />
        </TouchableOpacity>
      )}
      <View style={tailwind('')}>
        <Text
          style={tailwind('font-mon-bold text-xl text-white tracking-wider')}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default AppBar;
