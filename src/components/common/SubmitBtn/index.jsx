import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SumbitBtn = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={{color: "white"}}>{title}</Text>
    </View>
  );
};

export default SumbitBtn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});
