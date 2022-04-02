import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "@src/routes";

import { database } from "@db/index";

import { LoginContext } from "@src/App";

import FpButton from "@components/common/Button";

import { WHOAMI } from "@src/gql/auth";
import { useLazyQuery } from "@apollo/client";

const Home = () => {
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
      <Text>{String(loading)}</Text>
      <Text>{JSON.stringify(data, null, 4)}</Text>
    </View>
  );
};

export default Home;
