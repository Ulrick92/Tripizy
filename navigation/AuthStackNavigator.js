import { createAppContainer, createStackNavigator } from "react-navigation";

import MainContainer from "../screens/MainScreen/Main";
import LogInContainer from "../screens/LoginScreen/Login";
import SignUpContainer from "../screens/SignupScreen/Signup";

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainContainer
  },
  LogIn: {
    screen: LogInContainer
  },
  SignUp: {
    screen: SignUpContainer
  }
});

export default createAppContainer(AppNavigator);
