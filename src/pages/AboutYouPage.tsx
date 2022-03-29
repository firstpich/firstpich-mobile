import React, { useState } from "react";
import { View, TextInput, Text, FlatList } from "react-native";
import { useTailwind } from "tailwind-rn";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../App";

import FpButton from "../components/Button";
import AppBar from "../components/AppBar";
import GenderCard from "../components/GenderCard";
import GenreCard from "../components/GenreCard";

const possibleGenders = ["Male", "Female", "Others"];
const possibleGenres = [
  "Fiction",
  "Romance",
  "Folklore",
  "Fan-Fiction",
  "Horror",
  "History",
  "Thriller",
  "Western",
  "Sci-Fi",
  "Fantasy",
];

type GetStartedNavigationProps = StackNavigationProp<
  RootStackParamList,
  "AboutYouPage"
>;

const AboutYouPage = () => {
  const [gender, setGender] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);

  const navigation = useNavigation<GetStartedNavigationProps>();
  const tailwind = useTailwind();

  return (
    <View style={tailwind("bg-primary h-full")}>
      <AppBar showBack={false} />
      <View style={tailwind("flex items-start mt-12")}>
        <Text style={tailwind("text-white text-4xl font-mon-bold mb-4 mx-6")}>
          About You
        </Text>
        <TextInput
          placeholder="Your Name"
          placeholderTextColor="#FFFFFF"
          keyboardType="default"
          autoComplete="name"
          style={tailwind(
            "bg-input-fields-bg rounded-md w-96 text-white p-3 text-lg mx-5",
          )}
        />
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
        <Text
          style={tailwind("text-white text-lg font-mon-medium mb-4 mt-8 ml-6")}>
          What genre do you like to read?
        </Text>
        <View style={tailwind("flex flex-col")}>
          <View style={tailwind("h-16")}>
            <FlatList
              data={possibleGenres.slice(0, possibleGenres.length / 2)}
              horizontal
              renderItem={({ item, index }) => (
                <GenreCard
                  genre={item}
                  selected={genres.includes(item)}
                  onPress={() => {
                    if (genres.includes(item)) {
                      setGenres(genres.filter(g => g !== item));
                    } else {
                      setGenres(g => [...g, item]);
                    }
                  }}
                  className={`${
                    index === possibleGenres.length / 2 - 1 ? "mr-5" : "mr-4"
                  }
                  ${index === 0 ? "ml-5" : ""}`}
                />
              )}
            />
          </View>
          <View style={tailwind("h-16")}>
            <FlatList
              data={possibleGenres.slice(possibleGenres.length / 2)}
              horizontal
              renderItem={({ item, index }) => (
                <GenreCard
                  genre={item}
                  selected={genres.includes(item)}
                  onPress={() => {
                    if (genres.includes(item)) {
                      setGenres(genres.filter(g => g !== item));
                    } else {
                      setGenres(g => [...g, item]);
                    }
                  }}
                  className={`${
                    index === possibleGenres.length / 2 - 1 ? "mr-5" : "mr-4"
                  }
                  ${index === 0 ? "ml-5" : ""}`}
                />
              )}
            />
          </View>
        </View>
      </View>
      <View style={tailwind("absolute w-full bottom-6")}>
        <FpButton
          title="Next"
          className="mx-4"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
};

export default AboutYouPage;
