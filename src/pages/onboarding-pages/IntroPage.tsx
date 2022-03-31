import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { useTailwind } from "tailwind-rn";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import type { RootStackParamList } from "../../routes";

import FpLogo from "../../../assets/icons/fpLogo.svg";
import BgShade from "../../../assets/icons/bgShade.png";

import NextButton from "../../components/common/Button";
import CarouselCard from "../../components/screens/onboarding/intro-screen-components/CarouselCard";

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
          <View style={tailwind("flex flex-row items-center pl-3 -mt-20")}>
            <FpLogo width={38} height={38} />
            <Text style={tailwind("ml-3 text-white font-mon-bold text-3xl")}>
              firstpich
            </Text>
          </View>
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
