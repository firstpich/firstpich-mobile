import React, { useCallback, useState } from "react";
import { View, TextInput, Text, FlatList } from "react-native";
import { useTailwind } from "tailwind-rn";

import { gql, useMutation, useQuery } from "@apollo/client";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import type { RootStackParamList } from "../routes";

import FpButton from "../components/Button";
import AppBar from "../components/AppBar";
import GenderCard from "../components/GenderCard";
import GenreCard from "../components/GenreCard";

const possibleGenders = ["Male", "Female", "Others"];

export type AboutYouPageParams = {
  nonOnboardedToken: string;
};

const getMinMaxGenreConfig = gql`
  query onboardingConfig {
    runtimeConfig {
      onboarding {
        min_genre_likes_selected
        max_genre_likes_selected
      }
    }
  }
`;

const getGenres = gql`
  query genres {
    genres
  }
`;

const ONBOARD = gql`
  mutation onboard(
    $onBoardingArgs: OnBoardingArgs!
    $nonOnboardedToken: String!
  ) {
    onboard(
      onBoardingArgs: $onBoardingArgs
      nonOnboardedToken: $nonOnboardedToken
    ) {
      user {
        id
        phone
        name
        gender
      }
      tokens {
        accessToken
        refreshToken
      }
    }
  }
`;

type GetStartedNavigationProps = StackNavigationProp<
  RootStackParamList,
  "AboutYouPage"
>;

type ErrorTypes = {
  name: string | null;
  gender: string | null;
  genre: string | null;
};

const AboutYouPage = () => {
  const navigation = useNavigation<GetStartedNavigationProps>();
  const {
    params: { nonOnboardedToken },
  } = useRoute<RouteProp<RootStackParamList, "AboutYouPage">>();
  const tailwind = useTailwind();

  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);

  const [errors, setError] = useState<ErrorTypes>({
    name: null,
    gender: null,
    genre: null,
  });

  const { data: possibleGenres, loading: possibleGenresLoading } =
    useQuery(getGenres);
  const { data: onboardingConfig } = useQuery(getMinMaxGenreConfig);

  const [onboard, { loading }] = useMutation(ONBOARD, {
    errorPolicy: "all",
  });

  const onPressOnboard = useCallback(() => {
    const err: ErrorTypes = {
      name: null,
      gender: null,
      genre: null,
    };

    if (name === "") {
      err.name = "Name cannot be empty";
      setError(e => ({ ...e, name: err.name }));
    } else {
      setError(e => ({ ...e, name: null }));
    }

    if (gender === "") {
      err.gender = "Gender must be selected";
      setError(e => ({ ...e, gender: err.gender }));
    } else {
      setError(e => ({ ...e, gender: null }));
    }

    const minG =
      onboardingConfig.runtimeConfig.onboarding.min_genre_likes_selected;
    const maxG =
      onboardingConfig.runtimeConfig.onboarding.max_genre_likes_selected;

    if (minG > genres.length || maxG < genres.length) {
      err.genre = `You must select between ${minG} and ${maxG} genres as interests.`;
      setError(e => ({
        ...e,
        genre: err.genre,
      }));
    } else {
      setError(e => ({ ...e, genre: null }));
    }

    if (!(err.name === null && err.gender === null && err.genre === null)) {
      return;
    }

    onboard({
      variables: {
        onBoardingArgs: {
          name,
          gender,
          genre: genres,
        },
        nonOnboardedToken,
      },
    }).then(({ errors: onboardingErrors }) => {
      if (!onboardingErrors) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      }
    });
  }, [
    onboardingConfig,
    nonOnboardedToken,
    name,
    gender,
    genres,
    navigation,
    onboard,
    setError,
  ]);

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
          value={name}
          onChangeText={text => setName(text)}
          style={tailwind(
            "bg-input-fields-bg rounded-md w-96 text-white p-3 text-lg mx-5 " +
              (errors.name ? "border-red-500 border" : ""),
          )}
        />
        {errors.name && (
          <Text style={tailwind("mt-2 text-red-500 ml-6 text-xs")}>
            {errors.name}
          </Text>
        )}
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
        {errors.gender && (
          <Text style={tailwind("mt-2 text-red-500 ml-6 text-xs")}>
            {errors.gender}
          </Text>
        )}
        <Text
          style={tailwind("text-white text-lg font-mon-medium mb-4 mt-8 ml-6")}>
          What genre do you like to read?
        </Text>
        {!possibleGenresLoading && (
          <View style={tailwind("flex flex-col")}>
            <View style={tailwind("h-16")}>
              <FlatList
                data={possibleGenres.genres.slice(
                  0,
                  possibleGenres.genres.length / 2,
                )}
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
                      index === possibleGenres.genres.length / 2 - 1
                        ? "mr-5"
                        : "mr-4"
                    }
                  ${index === 0 ? "ml-5" : ""}`}
                  />
                )}
              />
            </View>
            <View style={tailwind("h-16")}>
              <FlatList
                data={possibleGenres.genres.slice(
                  possibleGenres.genres.length / 2,
                )}
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
                      index === possibleGenres.genres.length / 2 - 1
                        ? "mr-5"
                        : "mr-4"
                    }
                  ${index === 0 ? "ml-5" : ""}`}
                  />
                )}
              />
            </View>
          </View>
        )}
        {errors.genre && (
          <Text style={tailwind("mt-2 text-red-500 ml-6 text-xs")}>
            {errors.genre}
          </Text>
        )}
      </View>
      <View style={tailwind("mt-4 w-full")}>
        <FpButton
          title="Next"
          className="mx-4"
          onPress={onPressOnboard}
          disabled={loading}
        />
      </View>
    </View>
  );
};

export default AboutYouPage;
