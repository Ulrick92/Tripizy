import { createAppContainer, createStackNavigator } from "react-navigation";

import ListScreen from "../screens/ListScreen/List";
import DetailsTravelScreen from "../screens/DetailsTravelScreen/DetailsTravelBook";
import DetailsMapScreen from "../screens/DetailsTravelScreen/DetailsMap";

const TravelBookNavigator = createStackNavigator({
  List: {
    screen: ListScreen
  },
  DetailsTravel: {
    screen: DetailsTravelScreen
  },
  DetailsMap: {
    screen: DetailsMapScreen
  }
});

export default createAppContainer(TravelBookNavigator);
