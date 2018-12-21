import { createAppContainer, createStackNavigator } from "react-navigation";

import UserProfileScreen from "../screens/UserProfileScreen/UserProfile";

const AppNavigator = createStackNavigator({
  UserProfile: {
    screen: UserProfileScreen
  }
});

export default createAppContainer(AppNavigator);
