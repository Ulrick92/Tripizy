import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import styles from "./styles";

export default class NamesAndBirthday extends Component {
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
    first_name: "",
    last_name: "",
    birthday: ""
  };

  // redirectToLoginPage = () => {
  //   this.props.navigation.navigate("Login");
  // };

  handleSubmit = text => {
    const { first_name, last_name } = this.state;

    if (
      first_name !== "" &&
      first_name &&
      last_name !== "" &&
      last_name
      // this.state.first_name !== undefined &&
      // this.state.last_name !== undefined
    ) {
      this.props.navigation.navigate("Email", {
        first_name: first_name,
        last_name: last_name,
        birthday: birthday
      });
      console.log(this.state.first_name);
      console.log(this.state.last_name);
      console.log(this.state.birthday);
    } else {
      err;
      console.log("error", error);
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <View style={[styles.form]}>
          <Text style={styles.title}>Name</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={this.state.first_name}
            placeholder={"First Name"}
            onChangeText={value => {
              this.setState({
                first_name: value
              });
            }}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={this.state.last_name}
            placeholder={"Last Name"}
            onChangeText={value => {
              this.setState({
                last_name: value
              });
            }}
          />
          <TextInput
            style={styles.input}
            value={this.state.birthday}
            placeholder={"MM/DD/YYYY"}
            onChangeText={value => {
              this.setState({
                birthday: value
              });
            }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
