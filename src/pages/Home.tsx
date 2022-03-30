import React, { useContext } from "react";
import { View } from "react-native";

import FpButton from "../components/Button";

import { database } from "../db";
import { LoginContext } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../routes";

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
