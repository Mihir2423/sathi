import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import PublicStackNavigation from "./Public";
import PrivateNavigation from "./Private";

const NavigationProvider = () => {
  const token = useSelector((state) => state.auth.token);
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
      {token ? <PrivateNavigation /> : <PublicStackNavigation />}
      </View>
    </NavigationContainer>
  );
};

export default NavigationProvider;
