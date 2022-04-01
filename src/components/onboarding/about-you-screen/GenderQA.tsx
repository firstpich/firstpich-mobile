import React from "react";
import { View, Text, FlatList } from "react-native";

import { useTailwind } from "tailwind-rn";

import GenderCard from "./GenderCard";

const possibleGenders = ["Male", "Female", "Others"];

type GenderParams = {
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  errorText: string | null;
};

const GenderQA: React.FC<GenderParams> = ({ gender, setGender, errorText }) => {
  const tailwind = useTailwind();

  return (
    <>
      <Text
        style={tailwind("text-white text-lg font-mon-medium mb-4 mt-8 mx-6")}>
        How do you identify?
      </Text>
      <View style={tailwind("flex flex-row mx-5")}>
        <FlatList
          data={possibleGenders}
          horizontal
          renderItem={({ item, index }) => (
            <GenderCard
              className={index === possibleGenders.length - 1 ? "" : "mr-6"}
              genderType={item}
              selected={gender === item}
              onPress={() => setGender(item)}
            />
          )}
        />
      </View>
      {errorText && (
        <Text style={tailwind("mt-2 text-red-500 ml-6 text-xs")}>
          {errorText}
        </Text>
      )}
    </>
  );
};

export default GenderQA;
