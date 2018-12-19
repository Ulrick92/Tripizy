import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import axios from "axios";
import styles from "./styles";

export default class NamesAndBirthday extends Component {
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
    first_name: "",
    last_name: "",
    birthday: ""
  };

  handleSubmit = text => {
    const { first_name, last_name, birthday } = this.state;

    if (first_name !== "" && first_name && last_name !== "" && last_name) {
      this.props.navigation.navigate("Email", {
        first_name: first_name,
        last_name: last_name,
        birthday: birthday
      });
      console.log("first_name", first_name);
      console.log("last_name", last_name);
      console.log("birthday", birthday);
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>First Name</Text>
          <TextInput
            style={styles.input}
            // autoCapitalize="none"
            value={this.state.first_name}
            placeholder={"First Name"}
            onChangeText={value => {
              this.setState({
                first_name: value
              });
            }}
          />
          <Text style={styles.title}>Last Name</Text>
          <TextInput
            style={styles.input}
            // autoCapitalize="none"
            value={this.state.last_name}
            placeholder={"Last Name"}
            onChangeText={value => {
              this.setState({
                last_name: value
              });
            }}
          />
          <Text style={styles.title}>Birthday</Text>
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
          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
