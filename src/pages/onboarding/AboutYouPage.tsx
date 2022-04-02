import React, { useCallback, useContext, useEffect, useState } from "react";
import { View, Text, StatusBar } from "react-native";

import { useTailwind } from "tailwind-rn";

import { useMutation, useQuery } from "@apollo/client";
import { RUNTIME_CONFIG, GET_GENRE, ONBOARD } from "@src/gql/auth";

import { SafeAreaView } from "react-native-safe-area-context";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "@src/routes";

import Button from "@components/common/Button";
import AppBar from "@components/common/AppBar";
import GenderQA from "@components/onboarding/about-you-screen/GenderQA";
import GenreQA from "@components/onboarding/about-you-screen/GenreQA";
import NameInput from "@components/onboarding/about-you-screen/NameInput";

import validateOnboarding from "@validators/onboard";

import { database } from "@db/index";
import { LoginContext } from "@src/App";

export type AboutYouPageParams = {
  nonOnboardedToken: string;
};

type GetStartedNavigationProps = StackNavigationProp<
  RootStackParamList,
  "AboutYouPage"
>;

export type ErrorTypes = {
  name: string | null;
  gender: string | null;
  genre: string | null;
};

const errorInitialValue = {
  name: null,
  gender: null,
  genre: null,
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

  const [errors, setError] = useState<ErrorTypes>(errorInitialValue);

  const { data: possibleGenres, loading: possibleGenresLoading } =
    useQuery(GET_GENRE);
  const { data: onboardingConfig } = useQuery(RUNTIME_CONFIG);

  const [onboard, { loading, error, reset }] = useMutation(ONBOARD, {
    errorPolicy: "all",
  });

  useEffect(() => {
    setError(errorInitialValue);
    reset();
  }, [name, gender, genres, reset, error]);

  const thereIsGraphQLError =
    (error && error.graphQLErrors.length !== 0) || false;
  const thereIsNetworkError = (error && error.networkError) || false;

  let errorText = "";

  if (thereIsGraphQLError) {
    errorText = "Please check entered input";
  } else if (thereIsNetworkError) {
    errorText = "Please check your network and try again";
  }

  const { setIsLoggedIn } = useContext(LoginContext);

  const onPressOnboard = useCallback(() => {
    const err = validateOnboarding({
      name,
      gender,
      genres,
      maxG: onboardingConfig.runtimeConfig.onboarding.max_genre_likes_selected,
      minG: onboardingConfig.runtimeConfig.onboarding.min_genre_likes_selected,
    });

    setError(err);

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
    })
      .then(async ({ data, errors: onboardingErrors }) => {
        if (!onboardingErrors) {
          // Both access token and refresh token will be set
          await database.adapter.setLocal(
            "tokens",
            JSON.stringify(data.onboard.tokens),
          );

          setIsLoggedIn(true);

          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        }
      })
      .catch(console.log);
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
      <StatusBar backgroundColor="#0F0F0F" translucent={false} />
      <AppBar showBack={false} />
      <View style={tailwind("flex items-start mt-12")}>
        <NameInput name={name} setName={setName} errorText={errors.name} />
        <GenderQA
          gender={gender}
          setGender={setGender}
          errorText={errors.gender}
        />
        <GenreQA
          possibleGenresLoading={possibleGenresLoading}
          possibleGenres={possibleGenres ? possibleGenres.genres : []}
          genres={genres}
          setGenres={setGenres}
          errorText={errors.genre}
        />
      </View>
      {errorText ? (
        <Text style={tailwind("mt-2 text-red-500 ml-8 text-xs")}>
          {errorText}
        </Text>
      ) : (
        <></>
      )}
      <View style={tailwind("mt-4 w-full")}>
        <Button
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
