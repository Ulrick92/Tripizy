import { createAppContainer, createStackNavigator } from "react-navigation";

import NameAndBirthdayContainer from "../screens/SignupStepsScreen/NameAndBirthdayScreen/NameAndBirthday";
import EmailContainer from "../screens/SignupStepsScreen/EmailScreen/Email";
import AddressContainer from "../screens/SignupStepsScreen/AddressScreen/Address";

const AppNavigator = createStackNavigator({
  },
  NameAndBirthday: {
    screen: NameAndBirthdayContainer
  },
  Email: {
    screen: EmailContainer
  },
  Address: {
    screen: AddressContainer
  }
});

export default createAppContainer(AppNavigator);
