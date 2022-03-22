import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';

import Icon from 'react-native-remix-icon';

type ButtonProps = {
  title?: string;
  className?: string;
  onPress?: (() => void) | undefined;
  disabled?: boolean;
};

const AppBar: React.FC<ButtonProps> = ({
  title = 'firstpich',
  className = '',
  onPress = () => {},
}) => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('flex justify-center flex-col')}>
      <View style={tailwind('p-2 m-2')}>
        <TouchableOpacity
          onPress={onPress}
          style={tailwind(
            'flex items-center justify-center bg-primary-color-60 w-9 h-9 rounded-full' +
              className,
          )}>
          <Icon
            name="ri-arrow-left-s-line"
            size="40"
            color="white"
            style={tailwind('mr-0.5')}
          />
        </TouchableOpacity>
      </View>
      <View style={tailwind('flex items-center -mt-12')}>
        <Text
          style={tailwind('font-mon-bold text-xl text-white tracking-wider')}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default AppBar;
