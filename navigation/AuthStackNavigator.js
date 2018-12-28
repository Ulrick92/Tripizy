import { createAppContainer, createStackNavigator } from "react-navigation";
import MainContainer from "../screens/MainScreen/Main";
import LogInContainer from "../screens/LoginScreen/Login";
import NameAndBirthdayContainer from "../screens/SignupStepsScreen/NameAndBirthdayScreen/NameAndBirthday";
import EmailContainer from "../screens/SignupStepsScreen/EmailScreen/Email";
import UserPhotoContainer from "../screens/SignupStepsScreen/UserPhotoScreen/UserPhoto";
import AddressContainer from "../screens/SignupStepsScreen/AddressScreen/Address";

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainContainer
  },
  LogIn: {
    screen: LogInContainer
  },
  NameAndBirthday: {
    screen: NameAndBirthdayContainer
  },
  Email: {
    screen: EmailContainer
  },
  UserPhoto: {
    screen: UserPhotoContainer
  },
  Address: {
    screen: AddressContainer
  }
});

export default createAppContainer(AppNavigator);
