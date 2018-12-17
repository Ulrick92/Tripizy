import { createAppContainer, createStackNavigator } from "react-navigation";

import DetailsTravelScreen from "../screens/DetailsTravelScreen/DetailsTravelBook";
import TipsFormScreen from "../screens/StepFormScreen/TipsForm";
import HotelFormScreen from "../screens/StepFormScreen/HotelForm";
import RestaurantFormScreen from "../screens/StepFormScreen/RestaurantForm";

const AppNavigator = createStackNavigator({
  DetailsTravel: {
    screen: DetailsTravelScreen
  },
  TipsForm: {
    screen: TipsFormScreen
  },
  HotelForm: {
    screen: HotelFormScreen
  },
  RestaurantForm: {
    screen: RestaurantFormScreen
  }
});

export default createAppContainer(AppNavigator);
