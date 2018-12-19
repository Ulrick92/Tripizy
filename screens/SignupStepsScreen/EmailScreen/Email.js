import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import styles from "./styles";

export default class Email extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Travel Books",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  });

  // static navigationOptions = {
  //   title: "Sign Up",
  //   headerTintColor: "white",
  //   headerStyle: {
  //     backgroundColor: "#002982"
  //   },
  //   headerTitleStyle: {
  //     fontSize: 20,
  //     color: "white",
  //     fontWeight: "200"
  //   }
  // };

  state = {
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleSubmit = text => {
    const { email, password, confirmPassword } = this.state;
    const {
      first_name,
      last_name,
      birthday
    } = this.props.navigation.state.params;

    if (
      email !== "" &&
      email &&
      password !== "" &&
      password &&
      password === confirmPassword &&
      confirmPassword !== ""
    ) {
      this.props.navigation.navigate("UserPhoto", {
        first_name: first_name,
        last_name: last_name,
        birthday: birthday,
        email: email,
        password: password,
        confirmPassword: confirmPassword
      });
      console.log("email", email);
      console.log("password", password);
      console.log("confirmPassword", confirmPassword);
    } else {
      err;
      console.log("error", error);
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <Text style={styles.title}>Email and Password</Text>
        <View style={[styles.form]}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={this.state.email}
            placeholder={"Email"}
            onChangeText={value => {
              this.setState({
                email: value
              });
            }}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={this.state.password}
            placeholder={"Password"}
            secureTextEntry={true}
            onChangeText={value => {
              this.setState({
                password: value
              });
            }}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={this.state.confirmPassword}
            placeholder={"Confirm password"}
            secureTextEntry={true}
            onChangeText={value => {
              this.setState({
                confirmPassword: value
              });
            }}
          />
          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
