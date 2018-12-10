import React from "react";
import { createSwitchNavigator } from "react-navigation";

import AuthStackNavigator from "./AuthStackNavigator";
import MainTabNavigator from "./MainTabNavigator";
import TravelBookNavigator from "./TravelBookNavigator";
import FormStackNavigator from "./FormStackNavigator";

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html

  Auth: AuthStackNavigator, // Tomoko
  Main: MainTabNavigator, // Laurent
  TravelBook: TravelBookNavigator, // Laurent
  Form: FormStackNavigator
});
