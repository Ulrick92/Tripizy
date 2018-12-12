import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import ListScreen from "../screens/ListScreen/List";
import MyTripsScreen from "../screens/MyTripsScreen/MyTrips";
import UserProfileScreen from "../screens/UserProfileScreen/UserProfile";
import TipsScreen from "../screens/TipsScreen/Tips";

const ListStack = createStackNavigator({
  List: ListScreen
});

ListStack.navigationOptions = {
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

const MyTripsStack = createStackNavigator({
  MyTrips: MyTripsScreen
});

MyTripsStack.navigationOptions = {
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

const UserProfileStack = createStackNavigator({
  UserProfile: UserProfileScreen
});

UserProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};
export default createBottomTabNavigator({
  ListStack,
  MyTripsStack,
  TipsStack,
  UserProfileStack
});
