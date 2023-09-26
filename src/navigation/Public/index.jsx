import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getPublicRoutes, PUBLIC_INITIAL_ROUTE_NAME } from "./publicRoutes";

const Stack = createStackNavigator();

const PublicStackNavigation = () => {
  // Get the public routes
  const routes = getPublicRoutes((route, index) => ({
    ...route,
    key: `${route.name}-${index}`,
  }));
  return (
    <Stack.Navigator initialRouteName={`${PUBLIC_INITIAL_ROUTE_NAME}`}>
      {routes.map((route) => (
        <Stack.Screen
          key={route.key}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default PublicStackNavigation;
