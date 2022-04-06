import React from "react";
import { useTailwind } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-remix-icon";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Pages
// import HomePage from "@src/pages/home/Home";
import ExplorePage from "@src/pages/home/Explore";
import LibraryPage from "@src/pages/library/Library";
import ProfilePage from "@src/pages/profile/Profile";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  const tailwind = useTailwind();
  return (
    <NavigationContainer independent={true}>
      <View style={tailwind("flex flex-row justify-around")}>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: "#1E1E1E",
              height: 60,
              paddingBottom: 5,
              borderTopColor: "#1E1E1E",
            },
          }}>
          <Tab.Screen
            name="ExplorePage"
            component={ExplorePage}
            options={{
              tabBarIcon: () => (
                <Icon name="ri-home-7-line" size="30" color="white" />
              ),
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name="LibraryPage"
            component={LibraryPage}
            options={{
              tabBarIcon: () => (
                <Icon name="ri-search-line" size="30" color="white" />
              ),
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name="ProfilePages"
            component={ProfilePage}
            options={{
              tabBarIcon: () => (
                <Icon name="ri-pencil-line" size="30" color="white" />
              ),
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name="PfilePage"
            component={ProfilePage}
            options={{
              tabBarIcon: () => (
                <Icon name="ri-book-line" size="30" color="white" />
              ),
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name="Profilage"
            component={ProfilePage}
            options={{
              tabBarIcon: () => (
                <Icon name="ri-user-line" size="30" color="white" />
              ),
              tabBarShowLabel: false,
            }}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default NavBar;
