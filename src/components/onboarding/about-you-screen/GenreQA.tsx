import React from "react";
import { View, Text, FlatList } from "react-native";

import { useTailwind } from "tailwind-rn";

import GenreCard from "./GenreCard";

type GenreParams = {
  possibleGenresLoading: boolean;
  possibleGenres: string[];
  genres: string[];
  setGenres: React.Dispatch<React.SetStateAction<string[]>>;
  errorText: string | null;
};

const GenreQA: React.FC<GenreParams> = ({
  possibleGenresLoading,
  possibleGenres,
  genres,
  setGenres,
  errorText,
}) => {
  const tailwind = useTailwind();

  return (
    <>
      <Text
        style={tailwind("text-white text-lg font-mon-medium mb-4 mt-8 ml-6")}>
        What genre do you like to read?
      </Text>
      {!possibleGenresLoading && (
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
      )}
      {errorText && (
        <Text style={tailwind("mt-2 text-red-500 ml-6 text-xs")}>
          {errorText}
        </Text>
      )}
    </>
  );
};

export default GenreQA;
