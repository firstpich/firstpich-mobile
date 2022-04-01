import React, { useContext } from "react";
import { View } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "@src/routes";

import { database } from "@db/index";

import { LoginContext } from "@src/App";

import FpButton from "@components/common/Button";

const Home = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "Home">>();

  const { setIsLoggedIn } = useContext(LoginContext);

  return (
    <View>
      <FpButton
        title="Logout"
        className="mt-40"
        onPress={async () => {
          await database.adapter.setLocal("refresh_token", "");
          setIsLoggedIn(false);
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        }}
      />
    </View>
  );
};

export default Home;
