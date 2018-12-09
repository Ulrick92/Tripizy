import React from "react";
import { createSwitchNavigator } from "react-navigation";

import AuthStackNavigator from "./AuthStackNavigator";
import MainTabNavigator from "./MainTabNavigator";
import FormStackNavigator from "./FormStackNavigator";
import TravelBookNavigator from "./TravelBookNavigator";


export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Auth: AuthStackNavigator, // Tomoko
  Main: MainTabNavigator, // Laurent
  Form: FormStackNavigator
  TravelBook: TravelBookNavigator // Laurent
});
