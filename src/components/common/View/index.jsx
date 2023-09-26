import React from "react";
import { StyleSheet, View } from "react-native";

const CustomView = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default CustomView;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    paddingHorizontal: 24,
  },
});
