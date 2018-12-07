import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen/List";
// import SettingsScreen from "../screens/SettingsScreen";
import TipsScreen from "../screens/TipsScreen";
import UserProfileScreen from "../screens/UserProfile";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});
HomeStack.navigationOptions = {
  tabBarLabel: "Travel Books",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};
const LinksStack = createStackNavigator({
  Links: ListScreen
});
LinksStack.navigationOptions = {
  tabBarLabel: "My Trips",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};
const TipsStack = createStackNavigator({
  Tips: TipsScreen
});
TipsStack.navigationOptions = {
  tabBarLabel: "Tips",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};
const UserStack = createStackNavigator({
  User: UserProfileScreen
});
UserStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};
export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  TipsStack,
  SettingsStack
});
