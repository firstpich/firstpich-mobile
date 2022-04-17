import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Bar as ProgressBar } from "react-native-progress";

import BookPageHeader from "@components/book/BookPageHeader";
import NextChapter from "@components/book/NextChapter";

const Create = () => {
  const tailwind = useTailwind();
  return (
    <SafeAreaView
      style={tailwind("flex flex-col justify-between bg-primary h-full")}>
      <StatusBar
        backgroundColor="#0F0F0F"
        translucent={false}
        hidden={false}
        barStyle={"dark-content"}
      />
      <View style={tailwind("")}>
        <BookPageHeader
          title="Fortress Blood"
          className="font-mon-light text-sm"
        />
      </View>
      <View
        onLayout={e => {
          console.log(e.nativeEvent.layout);
        }}
        style={tailwind("mx-8")}>
        <Text
          style={{
            ...tailwind(
              "flex-grow font-mon-regular text-white text-base text-justify",
            ),
          }}>
          {`He groaned as an elixir, laced with the flavor of rosemary and sage, hit his mouth, his tongue, then trickled like the most beautiful fire down his throat.\n\t \tHe formed a seal around the wounds and began to suck. He lost a sense of time and place. All he felt was his cock driving into her once more, her body moving in heavy waves beneath his, and the amplified nature of her blood powering him once more. He went faster, a strong dedicated rhythm. Griffin. I love you.His heart swelled and his mating vibration began to pulse, a demanding frequency that called to her. He groaned as an elixir, laced with the flavor of rosemary and sage, hit his mouth, his tongue, then trickled like the most beautiful fire down his throat. He formed a seal around the wounds and began to suck. He lost a sense of time and place. All he felt was his cock driving into her once more, her body moving in heavy waves beneath his, and the amplified nature of her blood powering him once more. He went faster, a strong dedicated rhythm. Griffin. I love you. His heart swelled and his mating vibration began to pulse, a demanding frequency that called to her. He groaned as an elixir, laced with the flavor of rosemary and sage, hit his mouth, his tongue, then trickled like the most beautiful fire down his throat. He formed a seal around the wounds and began to suck. He lost a sense of time and place. All he felt was his cock driving into her once more, her body moving in heavy waves beneath his, and the amplified nature of her blood powering him once more.`}
        </Text>
      </View>
      <View style={tailwind("mx-8")}>
        <ProgressBar
          progress={0.5}
          width={null}
          height={3}
          color="#6CD29E"
          unfilledColor="#2C2F45"
          borderColor="#2C2F45"
          borderWidth={0}
        />
      </View>
      <View style={tailwind("mx-auto ")}>
        <NextChapter />
        <Text style={tailwind("text-center")}>69</Text>
      </View>
    </SafeAreaView>
  );
};

export default Create;
