import React from "react";
import { createSwitchNavigator } from "react-navigation";

import AuthStackNavigator from "./AuthStackNavigator";
import MainTabNavigator from "./MainTabNavigator";
import TravelBookNavigator from "./TravelBookNavigator";

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator, // Laurent
  TravelBook: TravelBookNavigator, // Laurent
  Auth: AuthStackNavigator // Tomoko
});
