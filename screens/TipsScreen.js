import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ImageBackground
} from "react-native";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Bons Plans",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  };

  render() {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
}
