// import React from "react";
// import {
//   createSwitchNavigator,
//   createStackNavigator,
//   createAppContainer
// } from "react-navigation";

// import MainTabNavigator from "./MainTabNavigator";

// const AppStack = createStackNavigator({ Signup: SignupScreen });
// const AuthStack = createStackNavigator({ Login: LoginScreen });

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       AuthLoadiong: AuthLoadingScreen,
//       App: AppStack,
//       Auth: AuthStack,
//       Main: MainTabNavigator
//     },
//     {
//       initialRouteName: "AuthLoading"
//     }
//   )
// );

import React from "react";
import { createSwitchNavigator } from "react-navigation";

import AuthStackNavigator from "./AuthStackNavigator";
import MainTabNavigator from "./MainTabNavigator";
import FormStackNavigator from "./FormStackNavigator";

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Auth: AuthStackNavigator, // Tomoko
  Main: MainTabNavigator, // Laurent
  Form: FormStackNavigator
});
