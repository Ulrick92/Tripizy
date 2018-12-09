import { createAppContainer, createStackNavigator } from "react-navigation";

import DetailsTravelScreen from "../screens/DetailsTravelScreen/DetailsTravelBook";

const TravelBookNavigator = createStackNavigator({
  DetailsTravel: {
    screen: DetailsTravelScreen
  }
});

export default createAppContainer(TravelBookNavigator);
