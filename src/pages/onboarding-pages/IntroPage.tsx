import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { useTailwind } from "tailwind-rn";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import type { RootStackParamList } from "../../routes";

// Assets
import BgShade from "../../../assets/icons/bgShade.png";

// Components
import NextButton from "../../components/common/Button";
import CarouselCard from "../../components/screens/onboarding/intro-screen-components/CarouselCard";
import FirstPichLogoText from "../../components/screens/onboarding/intro-screen-components/FirstPichLogoText";

type IntroPageNavigationProps = StackNavigationProp<
  RootStackParamList,
  "IntroPage"
>;

const IntroPage = () => {
  const navigation = useNavigation<IntroPageNavigationProps>();
  const tailwind = useTailwind();

  return (
    <View style={tailwind("bg-primary h-full")}>
      <ImageBackground source={BgShade} imageStyle={tailwind("opacity-30")}>
        <View style={tailwind("flex flex-col justify-center h-full")}>
          <FirstPichLogoText />
          <View style={tailwind("mt-32")}>
            <CarouselCard />
          </View>
        </View>
        <View style={tailwind("absolute w-full bottom-6")}>
          <NextButton
            title="Next"
            className="mx-4"
            onPress={() => navigation.navigate("GetStartedPage")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default IntroPage;