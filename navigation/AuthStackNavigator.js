import { createAppContainer, createStackNavigator } from "react-navigation";

import MainContainer from "../screens/MainScreen/Main";
import LogInContainer from "../screens/LoginScreen/Login";
import SignUpContainer from "../screens/SignupScreen/Signup";
// import ListContainer from "../screens/ListScreen/List";

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
  //   List: {
  //     screen: ListContainer
  //   }
});

export default createAppContainer(AppNavigator);
