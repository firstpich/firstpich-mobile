import {View, Text} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';

export default function MyComponent() {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('flex-1 justify-center items-center')}>
      <Text style={tailwind('text-green-400 text-3xl')}>
        Hi Sandipan !!How are you?
      </Text>
      <Text style={tailwind('text-green-400 text-3xl')}>
        Let's build firstpich
      </Text>
      <Text style={tailwind('text-green-400 text-xl')}>
        Let's build firstpich
      </Text>
    </View>
  );
}
