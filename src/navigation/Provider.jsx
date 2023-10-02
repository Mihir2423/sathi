import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Routes";

const NavigationProvider = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    </NavigationContainer>
  );
};

export default NavigationProvider;
