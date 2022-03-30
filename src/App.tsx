import React, { useEffect, createContext, useState, useCallback } from "react";
import { TailwindProvider } from "tailwind-rn";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import SplashScreen from "react-native-splash-screen";

import { BACKEND_URI } from "./config";

import utilities from "../tailwind.json";
import Routing from "./routes";

import { database } from "./db";

const client = new ApolloClient({
  uri: BACKEND_URI,
  cache: new InMemoryCache(),
});

type LoginContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginContext = createContext<LoginContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const setup = useCallback(async () => {
    // Fetch Is LoggedIn / Database Check / Get Access Token
    const refresh_token = await database.adapter.getLocal("refresh_token");
    if (refresh_token) setIsLoggedIn(true);
    else setIsLoggedIn(false);

    SplashScreen.hide();
  }, [setIsLoggedIn]);

  useEffect(() => {
    setup();
  }, [setup]);

  return (
    <ApolloProvider client={client}>
      <TailwindProvider utilities={utilities}>
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <Routing />
        </LoginContext.Provider>
      </TailwindProvider>
    </ApolloProvider>
  );
}
