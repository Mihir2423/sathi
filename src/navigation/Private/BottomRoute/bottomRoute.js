import ProfileScreen from "../../../screens/Profile";
import DashboardScreen from "../../../screens/dashboard"
import { DashBoardIcon, UserIcon } from "../../../../assets";


export const PRIVATE_INITIAL_PAGE = "Dashboard";

export const TabScreenOptions = {
  tabBarActiveTintColor: "#4E4FEB",
  tabBarInactiveTintColor: "#202020",
  tabBarStyle: {
    backgroundColor: "#FFFFFF",
    height: Platform.OS !== "ios" ? 50 : 60,
    paddingTop: 7,
    paddingBottom: 1,
    marginTop: -2,
    borderTopWidth: 1,
    borderTopColor: "#CCCCCC",
  },
  headerShown: false,
  tabBarHideOnKeyboard: true,
};

export const tabRoutes = [
  {
    name: "Dashboard",
    component: DashboardScreen,
    icon: DashBoardIcon,
  },
  {
    name: "Profile",
    component: ProfileScreen,
    icon: UserIcon,
  },
];
