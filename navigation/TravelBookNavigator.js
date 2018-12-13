import { createAppContainer, createStackNavigator } from "react-navigation";

import ListStack from "./MainTabNavigator";
// import ListScreen from "../screens/ListScreen/List";
import DetailsTravelScreen from "../screens/DetailsTravelScreen/DetailsTravelBook";
import DetailsMapScreen from "../screens/DetailsTravelScreen/DetailsMap";
import StepFormScreen from "../screens/StepFormScreen/Step1Form";

const TravelBookNavigator = createStackNavigator({
  ListStack,
  DetailsTravel: {
    screen: DetailsTravelScreen
  },
  StepForm: {
    screen: StepFormScreen
  },
  DetailsMap: {
    screen: DetailsMapScreen
  }
});

export default createAppContainer(TravelBookNavigator);
