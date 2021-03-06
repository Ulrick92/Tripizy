import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";

import ListScreen from "../screens/ListScreen/List";
import MyTripsScreen from "../screens/MyTripsScreen/MyTrips";
import MyProfileScreen from "../screens/UserProfileScreen/MyProfile";
import TipsScreen from "../screens/TipsScreen/TipsList";

const ListStack = createStackNavigator({
  List: ListScreen
});
ListStack.navigationOptions = {
  tabBarLabel: "Travel Books",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-search" : "md-search"}
    />
  )
};

const MyTripsStack = createStackNavigator({
  MyTrips: MyTripsScreen
});
MyTripsStack.navigationOptions = {
  tabBarLabel: "My Trips",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-book" : "md-book"}
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
      name={Platform.OS === "ios" ? "ios-star-outline" : "md-star-outline"}
    />
  )
};

const MyProfileStack = createStackNavigator({
  MyProfile: MyProfileScreen
});
MyProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-person"}
    />
  )
};
export default createBottomTabNavigator({
  ListStack,
  MyTripsStack,
  TipsStack,
  MyProfileStack
});
