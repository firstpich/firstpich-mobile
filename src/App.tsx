import React, { useEffect } from "react";
import { TailwindProvider } from "tailwind-rn";

import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import SplashScreen from "react-native-splash-screen";

import { BACKEND_URI } from "./config";

import IntroPage from "./pages/IntroPage";
import GetStartedPage from "./pages/GetStartedPage";
import SignUp from "./pages/SignUp";
import OtpPage, { OtpPageParams } from "./pages/OtpPage";
import AboutYouPage from "./pages/AboutYouPage";

import utilities from "../tailwind.json";

export type RootStackParamList = {
  IntroPage: undefined;
  GetStartedPage: undefined;
  SignUp: undefined;
  OtpPage: OtpPageParams;
  AboutYouPage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const client = new ApolloClient({
  uri: BACKEND_URI,
  cache: new InMemoryCache(),
});

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ApolloProvider client={client}>
      <TailwindProvider utilities={utilities}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="IntroPage">
            <Stack.Screen
              name="IntroPage"
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
          </Stack.Navigator>
          {/* <AboutYouPage /> */}
        </NavigationContainer>
      </TailwindProvider>
    </ApolloProvider>
  );
}
