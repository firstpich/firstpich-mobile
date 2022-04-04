import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-remix-icon";

import { useTailwind } from "tailwind-rn";

const NavBar = () => {
  const tailwind = useTailwind();
  return (
    <View
      style={tailwind(
        "flex flex-row justify-around bg-grey-black opacity-80 py-5",
      )}>
      <TouchableOpacity>
        <Icon name="ri-home-4-line" size="30" color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="ri-search-line" size="30" color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="ri-pencil-line" size="30" color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="ri-book-line" size="30" color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="ri-user-line" size="30" color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
