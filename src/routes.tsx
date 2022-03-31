import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import { OtpPageParams } from "./pages/onboarding-pages/OtpPage";
import { AboutYouPageParams } from "./pages/onboarding-pages/AboutYouPage";

import IntroPage from "./pages/onboarding-pages/IntroPage";
import GetStartedPage from "./pages/onboarding-pages/GetStartedPage";
import SignUp from "./pages/onboarding-pages/SignUp";
import OtpPage from "./pages/onboarding-pages/OtpPage";
import AboutYouPage from "./pages/onboarding-pages/AboutYouPage";

import Home from "./pages/home-pages/Home";

import { LoginContext } from "./App";

export type RootStackParamList = {
  IntroPage: undefined;
  GetStartedPage: undefined;
  SignUp: undefined;
  OtpPage: OtpPageParams;
  AboutYouPage: AboutYouPageParams;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Routing = () => {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home">
        {isLoggedIn ? (
          <Stack.Screen
            name="Home"
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
            component={Home}
          />
        ) : (
          <>
            <Stack.Screen
              name="Home"
              options={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
              component={IntroPage}
            />
            <Stack.Screen
              name="GetStartedPage"
              options={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
              component={GetStartedPage}
            />
            <Stack.Screen
              name="SignUp"
              options={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
              component={SignUp}
            />
            <Stack.Screen
              name="OtpPage"
              options={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
              component={OtpPage}
            />
            <Stack.Screen
              name="AboutYouPage"
              options={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
              component={AboutYouPage}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;