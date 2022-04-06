import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

const Explore = () => {
  const tailwind = useTailwind();
  return (
    <SafeAreaView
      style={tailwind(
        "flex flex-col justify-center items-center bg-primary h-full",
      )}>
      <StatusBar backgroundColor="#0F0F0F" translucent={true} />
      <View>
        <Text style={tailwind("text-white")}>This is explore page</Text>
      </View>
    </SafeAreaView>
  );
};

export default Explore;
