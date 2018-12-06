import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import MainContainer from "./screens/MainScreen/Main";
import LogInContainer from "./screens/LoginScreen/LogIn";
import SignUpContainer from "./screens/SignupScreen/SignUp";
// import ListContainer from "/screens/ListScreen/List";

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainContainer
  },

  Login: {
    screen: LogInContainer
  },

  Signup: {
    screen: SignUpContainer
  }

  // UserProfile: {
  //   screen: UserProfile
  // }
  // List: {
  //   screen: ListContainer
  // }
});

export default createAppContainer(AppNavigator);
