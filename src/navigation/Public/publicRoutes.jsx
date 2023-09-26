import LoginScreen from "../../screens/login";
import WelcomeScreen from "../../screens/welcome";

export const PUBLIC_INITIAL_ROUTE_NAME = "Welcome";

const routes = {
  Welcome: {
    component: WelcomeScreen,
    name: "Welcome",
    options: { headerShown: false },
  },
  Login: {
    component: LoginScreen,
    name: "Login",
    options: { headerShown: false },
  },
};

export function getPublicRoutes(stackScreen) {
  return Object.keys(routes).map((screen, index) =>
    stackScreen(routes[screen], index)
  );
}
