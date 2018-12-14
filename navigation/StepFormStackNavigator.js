import { createAppContainer, createStackNavigator } from "react-navigation";

import DetailsTravelScreen from "../screens/DetailsTravelScreen/DetailsTravelBook";
import TipsFormScreen from "../screens/StepFormScreen/TipsForm";
import HotelFormScreen from "../screens/StepFormScreen/HotelForm";

const AppNavigator = createStackNavigator({
  DetailsTravel: {
    screen: DetailsTravelScreen
  },
  TipsForm: {
    screen: TipsFormScreen
  },
  HotelForm: {
    screen: HotelFormScreen
  }
});

export default createAppContainer(AppNavigator);
