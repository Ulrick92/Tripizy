import { createAppContainer, createStackNavigator } from "react-navigation";

import ListStack from "./MainTabNavigator";
// import ListScreen from "../screens/ListScreen/List";
import DetailsTravelScreen from "../screens/DetailsTravelScreen/DetailsTravelBook";
import DetailsMapScreen from "../screens/DetailsTravelScreen/DetailsMap";
import StepFormScreen from "../screens/StepFormScreen/Step1Form";

import MainTabNavigator from "./MainTabNavigator";
import FormStackNavigator from "./FormStackNavigator";
import StepFormStackNavigator from "./StepFormStackNavigator";

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
  },
  Main: MainTabNavigator, // Laurent
  Form: FormStackNavigator, // Tomoko
  Step: StepFormStackNavigator // Laurent
});

export default createAppContainer(TravelBookNavigator);
