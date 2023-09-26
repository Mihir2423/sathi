import React from "react";
import { Platform, SafeAreaView } from "react-native";

const CustomSafeAreaView = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: Platform.OS !== "ios" && 35,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
