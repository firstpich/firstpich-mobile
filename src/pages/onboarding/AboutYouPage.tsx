import React, { useCallback, useContext, useState } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";

import { useTailwind } from "tailwind-rn";

import { useMutation, useQuery } from "@apollo/client";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { GET_MIN_MAX_GENRE_CONFIG, GET_GENRE, ONBOARD } from "../../gql/auth";

import type { RootStackParamList } from "../../routes";

import NextButton from "../../components/common/Button";
import AppBar from "../../components/common/AppBar";
import GenderQA from "../../components/onboarding/about-you-screen/GenderQA";
import GenreCard from "../../components/onboarding/about-you-screen/GenreCard";
import NameInput from "../../components/onboarding/about-you-screen/NameInput";

import { database } from "../../db";
import { LoginContext } from "../../App";

export type AboutYouPageParams = {
  nonOnboardedToken: string;
};

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
  const tailwind = useTailwind();
  const navigation = useNavigation<GetStartedNavigationProps>();
  const {
    params: { nonOnboardedToken },
  } = useRoute<RouteProp<RootStackParamList, "AboutYouPage">>();

  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);

  const [errors, setError] = useState<ErrorTypes>({
    name: null,
    gender: null,
    genre: null,
  });

  const { data: possibleGenres, loading: possibleGenresLoading } =
    useQuery(GET_GENRE);
  const { data: onboardingConfig } = useQuery(GET_MIN_MAX_GENRE_CONFIG);

  const [onboard, { loading }] = useMutation(ONBOARD, {
    errorPolicy: "all",
  });

  const { setIsLoggedIn } = useContext(LoginContext);

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
    }).then(async ({ data, errors: onboardingErrors }) => {
      if (!onboardingErrors) {
        await database.adapter.setLocal(
          "refresh_token",
          data.onboard.tokens.refreshToken,
        );
        setIsLoggedIn(true);
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
    setIsLoggedIn,
  ]);

  return (
    <SafeAreaView style={tailwind("bg-primary h-full")}>
      <AppBar showBack={false} />
      <View style={tailwind("flex items-start mt-12")}>
        <NameInput name={name} setName={setName} errorText={errors.name} />
        <GenderQA
          gender={gender}
          setGender={setGender}
          errorText={errors.gender}
        />
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
        <NextButton
          title="Next"
          className="mx-4"
          onPress={onPressOnboard}
          disabled={loading}
        />
      </View>
    </SafeAreaView>
  );
};

export default AboutYouPage;
