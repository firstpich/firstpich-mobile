import React from "react";
import { View, ImageBackground, SafeAreaView } from "react-native";
import { useTailwind } from "tailwind-rn";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import type { RootStackParamList } from "../../routes";

import BgShade from "../../../assets/icons/bgShade.png";

import Button from "../../components/common/Button";
import CarouselCard from "../../components/onboarding/intro-screen/CarouselCard";
import FirstPichLogoText from "../../components/onboarding/intro-screen/FirstPichLogoText";

type IntroPageNavigationProps = StackNavigationProp<
  RootStackParamList,
  "IntroPage"
>;

const IntroPage = () => {
  const navigation = useNavigation<IntroPageNavigationProps>();
  const tailwind = useTailwind();

  return (
    <SafeAreaView style={tailwind("bg-primary h-full")}>
      <ImageBackground source={BgShade} imageStyle={tailwind("opacity-30")}>
        <View style={tailwind("flex flex-col justify-center h-full")}>
          <FirstPichLogoText />
          <View style={tailwind("mt-32")}>
            <CarouselCard />
          </View>
        </View>
        <View style={tailwind("absolute w-full bottom-6")}>
          <Button
            title="Next"
            className="mx-4"
            onPress={() => navigation.navigate("GetStartedPage")}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default IntroPage;
