import React, { useState } from "react";
import { View, Text, ImageBackground, Dimensions } from "react-native";
import { useTailwind } from "tailwind-rn";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../App";

import Carousel, { Pagination } from "react-native-snap-carousel";

import FpLogo from "../../assets/icons/fpLogo.svg";
import BgShade from "../../assets/icons/bgShade.png";
import FpButton from "../components/Button";

type IntroPageNavigationProps = StackNavigationProp<
  RootStackParamList,
  "IntroPage"
>;

const carouselWords = [
  "Create audiobook right from your hand and earn.",
  "Create audiobook right from your hand and earn.",
  "Create audiobook right from your hand and earn.",
  "Create audiobook right from your hand and earn.",
];

const IntroPage = () => {
  const navigation = useNavigation<IntroPageNavigationProps>();
  const tailwind = useTailwind();
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const renderItem = ({ item }: { item: string }) => (
    <View style={tailwind("w-80 px-3")}>
      <Text style={tailwind("font-bold text-white text-lg")}>{item}</Text>
    </View>
  );

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

          <View style={tailwind("flex flex-col items-start mt-32")}>
            <Carousel
              onSnapToItem={idx => setActiveSlide(idx)}
              layout={"default"}
              data={carouselWords}
              renderItem={renderItem}
              sliderWidth={Dimensions.get("window").width}
              itemWidth={Dimensions.get("window").width}
              autoplay={true}
              enableMomentum={false}
              lockScrollWhileSnapping={true}
              loop={true}
              scrollEnabled={false}
            />
            <Pagination
              dotsLength={carouselWords.length}
              activeDotIndex={activeSlide}
              containerStyle={tailwind("-ml-2")}
              dotStyle={tailwind("bg-white w-3 h-3 rounded-full")}
              inactiveDotStyle={{}}
              inactiveDotOpacity={0.4}
              inactiveDotScale={1.0}
              dotContainerStyle={tailwind("mx-1")}
            />
          </View>
        </View>
        <View style={tailwind("absolute w-full bottom-6")}>
          <FpButton
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
