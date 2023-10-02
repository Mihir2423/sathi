import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  PRIVATE_INITIAL_PAGE,
  TabScreenOptions,
  tabRoutes,
} from "./bottomRoute";
import { GlobalStyles } from "../../../styles/typoStyles";
import { colors } from "../../../styles/colors";

const Tab = createBottomTabNavigator();

const BottomRouteNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={`${PRIVATE_INITIAL_PAGE}`}
      screenOptions={TabScreenOptions}
    >
      {tabRoutes.map((route) => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={({}) => ({
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <View>
                {route.name === "Dashboard" ? (
                  <Image source={route.icon} width={25} height={25} />
                ) : (
                  <View style={styles.textCon}>
                    <route.icon
                      width={focused ? 32 : 28}
                      height={focused ? 32 : 28}
                    />
                    <Text
                      style={[
                        GlobalStyles.smallText,
                        [{ color: colors.white }],
                      ]}
                    >
                      {route.name}
                    </Text>
                  </View>
                )}
              </View>
            ),
          })}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomRouteNavigation;

const styles = StyleSheet.create({
  textCon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
