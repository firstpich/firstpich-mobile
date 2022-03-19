import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';

import Icon from 'react-native-remix-icon';

type BackButtonProps = {
  onPress?: (() => void) | undefined;
};

const BackButton: React.FC<BackButtonProps> = ({onPress = () => {}}) => {
  const tailwind = useTailwind();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tailwind(
        'flex items-center justify-center bg-primary-color-60 w-9 h-9 ml-16 rounded-full',
      )}>
      <Icon
        name="ri-arrow-left-s-line"
        size="40"
        color="white"
        style={tailwind('mr-0.5')}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
