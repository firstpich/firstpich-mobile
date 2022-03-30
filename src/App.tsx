import React, { useEffect, createContext, useState } from "react";
import { TailwindProvider } from "tailwind-rn";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import SplashScreen from "react-native-splash-screen";

import { BACKEND_URI } from "./config";

import utilities from "../tailwind.json";
import Routing from "./routes";

const client = new ApolloClient({
  uri: BACKEND_URI,
  cache: new InMemoryCache(),
});

export const LoginContext = createContext<boolean>(false);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // Fetch Is LoggedIn / Database Check / Get Access Token
    setIsLoggedIn(false);
    SplashScreen.hide();
  }, [setIsLoggedIn]);

  return (
    <ApolloProvider client={client}>
      <TailwindProvider utilities={utilities}>
        <LoginContext.Provider value={isLoggedIn}>
          <Routing />
        </LoginContext.Provider>
      </TailwindProvider>
    </ApolloProvider>
  );
}
