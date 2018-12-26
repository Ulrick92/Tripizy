import { createAppContainer, createStackNavigator } from "react-navigation";

import ListStack from "./MainTabNavigator";
// import ListScreen from "../screens/ListScreen/List";
import DetailsTravelScreen from "../screens/DetailsTravelScreen/DetailsTravelBook";
import DetailsMapScreen from "../screens/DetailsTravelScreen/DetailsMap";
import StepFormScreen from "../screens/StepFormScreen/StepForm";
import TipsFormScreen from "../screens/StepFormScreen/TipsForm";
import TipsFilterScreen from "../screens/TipsScreen/TipsFilter";
import TipsPageScreen from "../screens/TipsScreen/TipsPage";
import CityFilterScreen from "../screens/TipsScreen/CityFilter";

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
  TipsFilter: {
    screen: TipsFilterScreen
  },
  TipsPage: {
    screen: TipsPageScreen
  },
  CityFilter: {
    screen: CityFilterScreen
  },
  DetailsMap: {
    screen: DetailsMapScreen
  },
  Main: MainTabNavigator // Laurent
});

export default createAppContainer(TravelBookNavigator);
