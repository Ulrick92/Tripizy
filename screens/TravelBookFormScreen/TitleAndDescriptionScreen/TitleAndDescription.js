import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import styles from "./styles";

export default class TitleAndDescription extends Component {
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
    title: "New Year holiday in Finland",
    description: "Short trip with my girlfriend"
  };

  redirectToLoginPage = () => {
    this.props.navigation.navigate("Login");
  };

  handleSubmit = text => {
    const { title, description } = this.state;
    const { travelbooks } = this.props.navigation.state.params;

    console.log(travelbooks);

    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      if (!token) {
        this.redirectToLoginPage();
      } else if (travelbooks.indexOf(this.state.title) !== 0) {
        this.props.navigation.navigate("Country", {
          title: title,
          description: description
        });
        console.log(this.state.title);
        console.log(this.state.description);
      } else {
        err;
        console.log("error", error);
      }

      // if (!token) {
      //   this.redirectToLoginPage();
      // } else {
      //   this.props.navigation.navigate("Country", {
      //     title: this.state.title,
      //     description: this.state.description
      //   });
      //   console.log(this.state.title);
      //   console.log(this.state.description);
      // }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>Title and Description</Text>
        <Text style={styles.hint}>What is the title of your travel book ?</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.title}
          placeholder={"ex : Honeymoon in Sri Lanka"}
          onChangeText={text => this.setState({ title: text })}
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.description}
          placeholder={"Description"}
          onChangeText={text => this.setState({ description: text })}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
