import HomeScreen from "../../../screens/home";
import ConnectScreen from "../../../screens/connect";
import DashboardScreen from "../../../screens/dashboard";
import CalendarScreen from "../../../screens/calendar";
import ProfileScreen from "../../../screens/profile";
import {
  DashBoardIcon,
  HomeIcon,
  NotifIcon,
  ConnectIcon,
  EducationIcon,
} from "../../../../assets";
import { colors } from "../../../styles/colors";

export const PRIVATE_INITIAL_PAGE = "Dashboard";

export const TabScreenOptions = {
  tabBarActiveTintColor: `${colors.white}`,
  tabBarInactiveTintColor: `${colors.white}`,
  tabBarStyle: {
    backgroundColor: `${colors.primaryRed}`,
    height: Platform.OS !== "ios" ? 80 : 90,
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
    name: "Home",
    component: HomeScreen,
    icon: HomeIcon,
  },
  {
    name: "Connect",
    component: ConnectScreen,
    icon: ConnectIcon,
  },
  {
    name: "Dashboard",
    component: DashboardScreen,
    icon: DashBoardIcon,
  },
  {
    name: "Educate",
    component: CalendarScreen,
    icon: EducationIcon,
  },
  {
    name: "Profile",
    component: ProfileScreen,
    icon: NotifIcon,
  },
];
