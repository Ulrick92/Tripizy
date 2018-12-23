import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import styles from "./styles";

export default class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    title: "Welcome",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  });

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../../assets/images/mexico.jpg")}
        >
          <Text style={styles.title}>tripizy</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CONTINUE WITH GOOGLE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CONTINUE WITH FACEBOOK</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            title="Go to Sign Up"
            onPress={() => this.props.navigation.navigate("NameAndBirthday")}
          >
            <Text style={styles.buttonText}>SIGN UP WITH EMAIL</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.clickableText}>Enter as guest</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            title="Go to Login"
            onPress={() => this.props.navigation.navigate("LogIn")}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
