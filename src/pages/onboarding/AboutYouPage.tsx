import React, { useCallback, useContext, useEffect, useState } from "react";
import { View, Text, StatusBar } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useTailwind } from "tailwind-rn";

import { useMutation, useQuery } from "@apollo/client";

import { RUNTIME_CONFIG, GENRES, ONBOARD } from "@src/gql/auth";
import { OnBoard, OnBoardVariables } from "@generated/OnBoard";

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
import { RuntimeConfig } from "@generated/RuntimeConfig";

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
    useQuery(GENRES);
  const { data: onboardingConfig } = useQuery<RuntimeConfig>(RUNTIME_CONFIG);

  const [onboard, { loading, error, reset }] = useMutation<
    OnBoard,
    OnBoardVariables
  >(ONBOARD, {
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
      maxG:
        onboardingConfig?.runtimeConfig.onboarding.max_genre_likes_selected ||
        3,
      minG:
        onboardingConfig?.runtimeConfig.onboarding.min_genre_likes_selected ||
        6,
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
            JSON.stringify(data?.onboard.tokens || ""),
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
    <SafeAreaView
      style={tailwind("flex flex-col justify-between bg-primary h-full")}>
      <KeyboardAwareScrollView contentContainerStyle={tailwind("flex-1")}>
        <StatusBar backgroundColor="#0F0F0F" translucent={true} />
        <View style={tailwind("pb-24")}>
          <AppBar showBack={false} />
        </View>
        <View style={tailwind("flex-grow")}>
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
        <View style={tailwind("mt-auto bottom-6")}>
          <Button
            title="Next"
            className="mx-4"
            onPress={onPressOnboard}
            disabled={loading}
            loading={loading}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AboutYouPage;
