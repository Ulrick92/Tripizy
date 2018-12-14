import React from "react";
import { createSwitchNavigator } from "react-navigation";

import AuthStackNavigator from "./AuthStackNavigator";
import TravelBookNavigator from "./TravelBookNavigator";

import AuthLoading from "../screens/AuthLoadingScreen/AuthLoading";

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AuthLoading: AuthLoading,
  Auth: AuthStackNavigator, // Tomoko
  TravelBook: TravelBookNavigator // Laurent
});
