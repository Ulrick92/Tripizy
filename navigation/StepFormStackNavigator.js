import { createAppContainer, createStackNavigator } from "react-navigation";

import DetailsTravelScreen from "../screens/DetailsTravelScreen/DetailsTravelBook";
import StepFormScreen from "../screens/StepFormScreen/StepForm";
import HotelFormScreen from "../screens/StepFormScreen/HotelForm";

const AppNavigator = createStackNavigator({
  DetailsTravel: {
    screen: DetailsTravelScreen
  },
  StepForm: {
    screen: StepFormScreen
  },
  HotelForm: {
    screen: HotelFormScreen
  }
});

export default createAppContainer(AppNavigator);
