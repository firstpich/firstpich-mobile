import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

import BookPageHeader from "@components/book/BookPageHeader";

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
      <ScrollView
        onLayout={e => {
          console.log(e.nativeEvent.layout);
        }}
        style={tailwind("flex-grow px-4 py-4")}>
        <Text
          style={tailwind(
            "font-mon-regular text-white text-lg text-left bg-red-500",
          )}>
          Lorem adipisicing velit anim incididunt non veniam irure aute sint ut
          magna sunt sint consectetur. Exercitation irure aliqua ex
          reprehenderit enim duis ad. Non sit in anim sit Lorem labore proident
          aute sunt est veniam fugiat culpa aute. Quis eu nulla aute proident
          sint aute non minim nulla sunt consectetur nisi. Dolore irure quis
          velit do. Mollit ex ad veniam eiusmod mollit ex consectetur sit sunt
          nisi. Proident in veniam ipsum Lorem irure. Pariatur eiusmod aute amet
          veniam ut. Cillum adipisicing elit proident elit occaecat id. Eu ad
          dolor ea laboris incididunt voluptate occaecat aliqua est deserunt.
          Magna anim mollit sunt cillum dolore id nulla. Veniam velit excepteur
          aliqua minim. Ullamco commodo officia enim officia quis velit minim
          mollit magna. Irure velit sit adipisicing nisi adipisicing irure
          ullamco et ut velit officia. Lorem nisi sunt id labore ad adipisicing
          ea aliqua ex labore. Lorem minim consequat id cupidatat magna Lorem
          cupidatat incididunt do dolore id. Culpa commodo fugia t commodo ea
          laboris est irure qui laborum excepteur id incididunt in. Cillum
          exercitation qui laboris commodo enim. Laborum mollit laborum velit
          consequat excepteur tempor qui anim et exercitation consequat. Lorem
          adipisicing velit anim incididunt non veniam irure aute sint ut magna
          sunt sint consectetur. Exercitation irure aliqua ex reprehenderit enim
          duis ad. Non sit in anim sit Lorem labore proident aute sunt est
          veniam fugiat culpa aute. Quis eu nulla aute proident sint aute non
          minim nulla sunt consectetur nisi. Dolore irure quis velit do. Mollit
          ex ad veniam eiusmod mollit ex consectetur sit sunt nisi. Proident in
          veniam ipsum Lorem irure. Pariatur eiusmod aute amet veniam ut. Cillum
          adipisicing elit proident elit occaecat id. Eu ad dolor ea laboris
          incididunt voluptate occaecat aliqua est deserunt. Magna anim mollit
          sunt cillum dolore id nulla. Veniam velit excepteur aliqua minim.
          Ullamco commodo officia enim officia quis velit minim mollit magna.
          Irure velit sit adipisicing nisi adipisicing irure ullamco et ut velit
          officia. Lorem nisi sunt id labore ad adipisicing ea aliqua ex labore.
          Lorem minim consequat id cupidatat magna Lorem cupidatat incididunt do
          dolore id. Culpa commodo fugiat commodo ea laboris est irure qui
          laborum excepteur id incididunt in. Cillum exercitation qui laboris
          commodo enim. Laborum mollit laborum velit consequat excepteur tempor
          qui anim et exercitation consequat.
        </Text>
      </ScrollView>
      <View style={tailwind("flex-grow py-12")}>
        <Text style={tailwind("text-center")}>69</Text>
      </View>
    </SafeAreaView>
  );
};

export default Create;
