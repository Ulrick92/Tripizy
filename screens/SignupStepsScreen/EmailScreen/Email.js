import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import styles from "./styles";

export default class Email extends Component {
  static navigationOptions = {
    title: "Sign Up",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#002982"
    },
    headerTitleStyle: {
      fontSize: 20,
      color: "white",
      fontWeight: "200"
    }
  };

  state = {
    email: "",
    password: "",
    confirmPassword: ""
  };

  //   redirectToLoginPage = () => {
  //     this.props.navigation.navigate("Login");
  //   };

  handleSubmit = text => {
    const { email, password, confirmPassword } = this.state;

    if (
      email !== "" &&
      email &&
      password !== "" &&
      password &&
      password === confirmPassword &&
      confirmPassword !== ""
      //   this.state.email !== undefined &&
      //   this.state.password !== undefined &&
      //   this.state.confirmPassword !== undefined
    ) {
      this.props.navigation.navigate("Address", {
        email: email,
        password: password,
        confirmPassword: confirmPassword
      });
      console.log(this.state.email);
      console.log(this.state.password);
      console.log(this.state.confirmPassword);
    } else {
      err;
      console.log("error", error);
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <View style={[styles.form]}>
          <Text style={styles.title}>Email and Password</Text>
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
        </View>
      </KeyboardAvoidingView>
    );
  }
}
