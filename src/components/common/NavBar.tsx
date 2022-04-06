import React from "react";
import { useTailwind } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
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
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#1E1E1E",
            height: 60,
            paddingBottom: 5,
            borderTopColor: "#1E1E1E",
          },
          tabBarActiveTintColor: "#e91e63",
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="HomePage"
          component={HomePage}
          options={{
            tabBarIcon: () => (
              <Icon name="ri-home-7-line" size="30" color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="ExplorePage"
          component={ExplorePage}
          options={{
            tabBarIcon: () => (
              <Icon name="ri-search-line" size="30" color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="CreatePage"
          component={CreatePage}
          options={{
            tabBarIcon: () => (
              <Icon name="ri-pencil-line" size="30" color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="LibraryPage"
          component={LibraryPage}
          options={{
            tabBarIcon: () => (
              <Icon name="ri-book-line" size="30" color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{
            tabBarIcon: () => (
              <Icon name="ri-user-line" size="30" color="white" />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default NavBar;
