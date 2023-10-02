import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../../../components/CustomDrawer";

import BottomRouteNavigation from "../BottomRoute"
import { Dimensions } from "react-native";

const Drawer = createDrawerNavigator();

const DrawerRouteNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="BottomTabs"
      screenOptions={{
        drawerStyle: {
          width: Dimensions.get("window").width * 0.8,
        },
        drawerType: "front",
        drawerPosition: "left",
      }}
    >
      <Drawer.Screen
        name="BottomTabs"
        component={BottomRouteNavigation}
        options={{
          drawerLabel: "BottomTabs",
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRouteNavigation;
