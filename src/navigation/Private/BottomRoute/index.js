import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  PRIVATE_INITIAL_PAGE,
  TabScreenOptions,
  tabRoutes,
} from "./bottomRoute";

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
                <route.icon
                  width={focused ? 32 : 28}
                  height={focused ? 32 : 28}
                  stroke={focused ? "#111" : "#202020"}
                />
              </View>
            ),
          })}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomRouteNavigation;
