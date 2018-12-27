import { createAppContainer, createStackNavigator } from "react-navigation";

import ListStack from "./MainTabNavigator";
import DetailsTravelScreen from "../screens/DetailsTravelScreen/DetailsTravelBook";
import DetailsMapScreen from "../screens/DetailsTravelScreen/DetailsMap";
import StepFormScreen from "../screens/StepFormScreen/StepForm";
import TipsFormScreen from "../screens/StepFormScreen/TipsForm";
import TipsFilterScreen from "../screens/TipsScreen/TipsFilter";
import TipsPageScreen from "../screens/TipsScreen/TipsPage";
import CityFilterScreen from "../screens/TipsScreen/CityFilter";
import UserProfileScreen from "../screens/UserProfileScreen/UserProfile";
import MainTabNavigator from "./MainTabNavigator";
import HotelFormScreen from "../screens/StepFormScreen/HotelForm";
import RestaurantFormScreen from "../screens/StepFormScreen/RestaurantForm";
import TitleAndDescriptionContainer from "../screens/TravelBookFormScreen/TitleAndDescriptionScreen/TitleAndDescription";
import CountryContainer from "../screens/TravelBookFormScreen/CountryScreen/Country";
import DatesContainer from "../screens/TravelBookFormScreen/DatesScreen/Dates";
import PhotosContainer from "../screens/TravelBookFormScreen/PhotosScreen/Photos";
import CategoryContainer from "../screens/TravelBookFormScreen/CategoryScreen/Category";
import NameAndBirthdayContainer from "../screens/SignupStepsScreen/NameAndBirthdayScreen/NameAndBirthday";
import EmailContainer from "../screens/SignupStepsScreen/EmailScreen/Email";
import AddressContainer from "../screens/SignupStepsScreen/AddressScreen/Address";

const TravelBookNavigator = createStackNavigator({
  ListStack,
  DetailsTravel: {
    screen: DetailsTravelScreen
  },
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
  UserProfile: {
    screen: UserProfileScreen
  },
  TipsForm: {
    screen: TipsFormScreen
  },
  HotelForm: {
    screen: HotelFormScreen
  },
  RestaurantForm: {
    screen: RestaurantFormScreen
  },
  NameAndBirthday: {
    screen: NameAndBirthdayContainer
  },
  Email: {
    screen: EmailContainer
  },
  Address: {
    screen: AddressContainer
  },
  Main: MainTabNavigator // Laurent
});

export default createAppContainer(TravelBookNavigator);
