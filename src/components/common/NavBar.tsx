import React from "react";
import { useTailwind } from "tailwind-rn";
import { Platform, View } from "react-native";
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
          tabBarIcon: ({ focused, color }) => {
<<<<<<< HEAD
            let IconName;
=======
            let IconName: string;
>>>>>>> 2f45ecf (chore: completed navbar with type check enabled)

            if (route.name === "HomePage") {
              IconName = focused ? "ri-home-7-fill" : "ri-home-7-line";
            } else if (route.name === "ExplorePage") {
              IconName = focused ? "ri-search-fill" : "ri-search-line";
            } else if (route.name === "CreatePage") {
              IconName = focused ? "ri-pencil-fill" : "ri-pencil-line";
            } else if (route.name === "LibraryPage") {
              IconName = focused ? "ri-book-fill" : "ri-book-line";
            } else {
              IconName = focused ? "ri-user-fill" : "ri-user-line";
            }
<<<<<<< HEAD

            return (
              <Icon
                name={IconName}
                size={Platform.OS === "android" ? 30 : 25}
                color={color}
              />
            );
=======
            return <Icon name={IconName} size={30} color={color} />;
>>>>>>> 2f45ecf (chore: completed navbar with type check enabled)
          },
          tabBarStyle: {
            backgroundColor: "#1E1E1E",
            height: Platform.OS === "android" ? 60 : 82,
            paddingBottom: Platform.OS === "android" ? 5 : 33,
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
