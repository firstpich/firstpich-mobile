import React from "react";
import { useTailwind } from "tailwind-rn";
import { View } from "react-native";
import Icon from "react-native-remix-icon";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Pages
import HomePage from "@src/pages/home/Home";
import ExplorePage from "@src/pages/home/Explore";
import LibraryPage from "@src/pages/library/Library";
import ProfilePage from "@src/pages/profile/Profile";
import CreatePage from "@src/pages/book/create";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind("flex flex-row justify-around bg-primary h-full")}>
      <Tab.Navigator
        initialRouteName="HomePage"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let IconName;

            if (route.name === "HomePage") {
              IconName = focused ? "ri-home-7-fill" : "ri-home-7-line";
            }
            if (route.name === "ExplorePage") {
              IconName = focused ? "ri-search-fill" : "ri-search-line";
            }
            if (route.name === "CreatePage") {
              IconName = focused ? "ri-pencil-fill" : "ri-pencil-line";
            }
            if (route.name === "LibraryPage") {
              IconName = focused ? "ri-book-fill" : "ri-book-line";
            }
            if (route.name === "ProfilePage") {
              IconName = focused ? "ri-user-fill" : "ri-user-line";
            }

            return <Icon name={IconName} size={30} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: "#1E1E1E",
            height: 60,
            paddingBottom: 5,
            borderTopColor: "#1E1E1E",
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          headerShown: false,
          tabBarShowLabel: false,
        })}>
        <Tab.Screen name="HomePage" component={HomePage} />
        <Tab.Screen name="ExplorePage" component={ExplorePage} />
        <Tab.Screen name="CreatePage" component={CreatePage} />
        <Tab.Screen name="LibraryPage" component={LibraryPage} />
        <Tab.Screen name="ProfilePage" component={ProfilePage} />
      </Tab.Navigator>
    </View>
  );
};

export default NavBar;
