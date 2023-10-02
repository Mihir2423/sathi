import React from "react";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const CustomDrawer = () => {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS !== "ios" && 45 }}>
      <View style={styles.container}>
        <View>
          <Text>Hello World</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    paddingBottom: Dimensions.get("screen").height * 0.04,
  },
});
