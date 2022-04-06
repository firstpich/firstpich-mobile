import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

const Explore = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#0F0F0F" translucent={true} />
      <View>
        <Text>This is profile page</Text>
      </View>
    </SafeAreaView>
  );
};

export default Explore;
