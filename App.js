import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import MainContainer from "./screens/MainScreen/Main";
import LogInContainer from "./screens/LogInScreen/LogIn";
import SignUpContainer from "./screens/SignUpScreen/SignUp";
import ListContainer from "./screens/ListScreen/List";

const AppNavigator = createStackNavigator({
  List: {
    screen: ListContainer
  },
  Main: {
    screen: MainContainer
  },
  LogIn: {
    screen: LogInContainer
  },
  SignUp: {
    screen: SignUpContainer
  }

  // UserProfile: {
  //   screen: UserProfile
  // }
});

export default createAppContainer(AppNavigator);
