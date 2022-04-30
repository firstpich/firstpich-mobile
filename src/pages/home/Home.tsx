import React, { useContext, useEffect } from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "@src/routes";

import { database } from "@db/index";

import { LoginContext } from "@src/App";

import FpButton from "@components/common/Button";

import { WHOAMI } from "@src/gql/auth";
import { useLazyQuery } from "@apollo/client";

import AppBar from "@components/common/AppBar";

const Home = () => {
  const tailwind = useTailwind();
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "Home">>();

  const [fetchData, { data, loading }] = useLazyQuery(WHOAMI, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const { setIsLoggedIn } = useContext(LoginContext);

  return (
    <SafeAreaView
      style={tailwind("flex flex-col justify-between bg-primary h-full")}>
      <View style={tailwind("")}>
        <AppBar showBack={false} />
      </View>
      <KeyboardAwareScrollView contentContainerStyle={tailwind("flex-1")}>
        <StatusBar backgroundColor="#0F0F0F" translucent={true} />
        <View>
          <FpButton
            title="Logout"
            className="mt-20"
            onPress={async () => {
              await database.adapter.setLocal("tokens", "");
              setIsLoggedIn(false);
              navigation.reset({
                index: 0,
                routes: [{ name: "Home" }],
              });
            }}
          />
          <FpButton
            title="Fetch Details"
            className="mt-20 mb-20"
            onPress={() => {
              fetchData().catch(console.log);
            }}
          />
          <FpButton
            title="go to book page"
            className="mt-20 mb-20"
            onPress={() => {
              navigation.navigate("BookPlayer");
            }}
          />
          <Text style={tailwind("text-white")}>{String(loading)}</Text>
          <Text style={tailwind("text-white")}>
            {JSON.stringify(data, null, 4)}
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Home;
