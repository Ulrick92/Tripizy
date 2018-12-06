import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button
} from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import {
  createBottomTabNavigator,
  createAppContainer,
  TabNavigator
} from "react-navigation";
import t from "tcomb-form-native";

const Form = t.form.Form;

const bioForm = t.struct({
  bio: t.String
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.coverContainer}>
          {/* <View style={styles.profilePicture} /> */}
        </View>

        <View style={styles.buttonLeisure}>
          <Button onPress={this._onPressButton} title="About" />
          <Button onPress={this._onPressButton} title="Trips" />
          <Button onPress={this._onPressButton} title="Friends" />
          <Button onPress={this._onPressButton} title="Activity" />
        </View>

        <Text style={styles.photos}>Photos</Text>
        <View style={styles.bioContainer}>
          <Form type={bioForm} />
        </View>

        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.buttonBIO}> EDIT PROFILE </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    paddingTop: 400
  },
  coverContainer: {
    flex: 0.8,
    backgroundColor: "red"
  },
  // profilePicture: {
  //   flex: 0.4,
  //   backgroundColor: "green"
  // },
  button: {
    borderRadius: "20%",
    alignItems: "center",
    backgroundColor: "blue",
    color: "white",
    marginRight: 100,
    marginLeft: 100,
    // marginTop: 30,
    paddingTop: 0
  },
  buttonText: {
    color: "white"
  },
  bioContainer: {
    // paddingTop: 200
  },
  photos: {
    // paddingTop: 200
  },
  buttonLeisure: {
    flexDirection: "row",
    justifyContent: "space-between"
  }