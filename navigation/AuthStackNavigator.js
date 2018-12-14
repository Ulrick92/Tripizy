import { createAppContainer, createStackNavigator } from "react-navigation";
import MainContainer from "../screens/MainScreen/Main";
import LogInContainer from "../screens/LoginScreen/Login";

// import SignUpContainer from "../screens/SignupScreen/Signup";

// import NameAndBirthdayContainer from "../screens/SignupStepsScreen/NameAndBirthdayScreen/NameAndBirthday";
// import EmailContainer from "../screens/SignupStepsScreen/EmailScreen/Email";
// import AddressContainer from "../screens/SignupStepsScreen/AddressScreen/Address";

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainContainer
  },
  LogIn: {
    screen: LogInContainer
  }
  // SignUp: {
  //   screen: SignUpContainer
  // }
  // NameAndBirthday: {
  //   screen: NameAndBirthdayContainer
  // },
  // Email: {
  //   screen: EmailContainer
  // },
  // Address: {
  //   screen: AddressContainer
  // }
});

export default createAppContainer(AppNavigator);
