import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { useTailwind } from "tailwind-rn";

import Carousel, { Pagination } from "react-native-snap-carousel";

const carouselWords = [
  "Create audiobook right from your hand and earn.",
  "Grab the reader’s interest with your first sentence.",
  "Make art with your voice that is heard by millions",
  "Hear what your ears love from the best.",
];

const CarouselCard = ({}) => {
  const tailwind = useTailwind();
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const renderItem = ({ item }: { item: string }) => (
    <View style={tailwind("w-80 px-3")}>
      <Text style={tailwind("font-bold text-white text-lg")}>{item}</Text>
    </View>
  );

  return (
    <View style={tailwind("flex flex-col items-start")}>
      <Carousel
        onSnapToItem={idx => setActiveSlide(idx)}
        layout={"default"}
        data={carouselWords}
        renderItem={renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width}
        autoplay={true}
        enableMomentum={true}
        autoplayInterval={2300}
        lockScrollWhileSnapping={true}
        loop={true}
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
  );
};

export default CarouselCard;
