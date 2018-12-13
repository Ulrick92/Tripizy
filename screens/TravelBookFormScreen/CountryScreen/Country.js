import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import styles from "./styles";

export default class Country extends Component {
  static navigationOptions = {
    title: "Create a Travel Book",
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
    country: "Finland",
    city: "Helsinki"
  };

  redirectToLoginPage = () => {
    this.props.history.push("/log_in");
  };

  handleSubmit = event => {
    const { country, city } = this.state;

    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      if (!token) {
        this.redirectToLoginPage();
      } else {
        this.props.navigation.navigate("Dates", {
          title: this.props.navigation.state.params.title,
          description: this.props.navigation.state.params.description,
          country: this.state.country,
          city: this.state.city
        });
        console.log("title", this.props.navigation.state.params.title);
        console.log(this.state.country);
        console.log(this.state.city);
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>Countries</Text>
        <Text style={styles.hint}>
          Which countries are you planning to visit ?
        </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.country}
          placeholder={"ex : Select a country"}
          onChangeText={value => {
            this.setState({
              country: value
            });
          }}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
