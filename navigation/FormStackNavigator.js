import { createAppContainer, createStackNavigator } from "react-navigation";

import TitleAndDescriptionContainer from "../screens/TravelBookFormScreen/TitleAndDescription";
import CountryContainer from "../screens/TravelBookFormScreen/Country";
import DatesContainer from "../screens/TravelBookFormScreen/Dates";
import PhotosContainer from "../screens/TravelBookFormScreen/Photos";
import CategoryContainer from "../screens/TravelBookFormScreen/Category";
import PreviewContainer from "../screens/TravelBookFormScreen/Preview";

const AppNavigator = createStackNavigator({
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
  },
  Preview: {
    screen: PreviewContainer
  }
});

export default createAppContainer(AppNavigator);
