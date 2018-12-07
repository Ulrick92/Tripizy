import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
// import { AppLoading, Asset, Font, Icon } from "expo";
// import AppNavigator from "./navigation/AppNavigator";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

class CarnetScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}
class MonCarnetScreen extends React.Components {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}
class BonPlanScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}
class ProfilScreen extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this._onPressButton}>
        <Image style={styles.button} source={require("./myButton.png")} />{" "}
        <Text>MODIFIER PROFIL</Text>
      </TouchableOpacity>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Carnet: { screen: CarnetScreen },
  MonCarnet: { screen: MonCarnetScreen },
  BonPlan: { screen: BonPlanScreen },
  Profil: { screen: ProfilScreen }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
export default createAppContainer(TabNavigator);
