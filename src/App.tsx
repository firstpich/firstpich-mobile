import React, { useEffect, createContext, useState, useCallback } from "react";
import { TailwindProvider } from "tailwind-rn";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import SplashScreen from "react-native-splash-screen";

import { BACKEND_URI } from "./config";

import utilities from "../tailwind.json";
import Routing from "./routes";

import { database } from "@db/index";

import _authMiddleware from "@src/utils/authMiddleware";

const httpLink = new HttpLink({ uri: BACKEND_URI });

const authMiddleware = setContext(_authMiddleware);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authMiddleware, httpLink]),
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
    const tokens = await database.adapter.getLocal("tokens");
    setIsLoggedIn(!!tokens);
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
