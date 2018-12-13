import { createAppContainer, createStackNavigator } from "react-navigation";

import TitleAndDescriptionContainer from "../screens/TravelBookFormScreen/TitleAndDescriptionScreen/TitleAndDescription";
import CountryContainer from "../screens/TravelBookFormScreen/CountryScreen/Country";
import DatesContainer from "../screens/TravelBookFormScreen/DatesScreen/Dates";
import PhotosContainer from "../screens/TravelBookFormScreen/PhotosScreen/Photos";
import CategoryContainer from "../screens/TravelBookFormScreen/CategoryScreen/Category";
import PreviewContainer from "../screens/TravelBookFormScreen/Preview";
import MyTripsStack from "./MainTabNavigator";

const AppNavigator = createStackNavigator({
  MyTripsStack,

  TitleAndDescription: {
    screen: TitleAndDescriptionContainer
  },
  Country: {
    screen: CountryContainer
  },
  Dates: {
    screen: DatesContainer
  },
  Photos: {
    screen: PhotosContainer
  },
  Category: {
    screen: CategoryContainer
  }
  // Preview: {
  //   screen: PreviewContainer
  // }
});

export default createAppContainer(AppNavigator);
