import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
// import "./style";

export default class SignUp extends Component {
  state = {
    // vérifier si l'user est authentifié
    isAuthenticated: false,
    email: "arno@airbnb-api.com", // email à remplacer
    password: "password01" // password à remplacer
  };

  static navigationOptions = {
    title: "Signup",
    headerStyle: {
      backgroundColor: "yellow"
    },
    headerTitleStyle: {
      fontSize: 24,
      color: "white",
      fontWeight: "200"
    }
  };

  handleClick = () => {
    const { navigate } = this.props.navigation;
    navigate("Login");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>tripizy</Text>
        <TouchableOpacity style={styles.buttonSignup}>
          <Text style={styles.buttonText}>CONTINUE WITH GOOGLE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSignup}>
          <Text style={styles.buttonText}>CONTINUE WITH FACEBOOK</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSignup}>
          <Text style={styles.buttonText}>SIGNUP WITH EMAIL</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.clickableText}>Enter as guest</Text>
        </TouchableOpacity>

        <TouchableOpacity title="Go to Login" onPress={this.handleClick}>
          <Text style={styles.clickableText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    paddingVertical: 50
  },
  title: {
    color: "white",
    fontSize: 50,
    fontWeight: "200",
    textAlign: "center",
    marginBottom: 100
  },
  buttonSignup: {
    marginTop: 20,
    backgroundColor: "grey",
    height: 50,
    width: 250,
    justifyContent: "center",
    borderColor: "white",
    borderRadius: 25
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  clickableText: {
    fontSize: 20,
    color: "white",
    marginTop: 30,
    height: 50,
    width: 200,
    textAlign: "center"
  }
});
