import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import styles from "./styles";
import axios from "axios";

export default class LogIn extends Component {
  static navigationOptions = {
    title: "Login",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#002982"
    },
    headerTitleStyle: {
      fontSize: 24,
      color: "white",
      fontWeight: "200"
    }
  };

  state = {
    // vérifier si l'user est authentifié

    isAuthenticated: false,
    email: "laurent.bonnec@gmail.com",
    password: "azerty"
  };

  handleSubmit = () => {
    const { email, password } = this.state;

    axios

      .post("https://back-tripizy.herokuapp.com/user/log_in", {
        email,
        password
      })
      .then(response => {
        console.log("response", response.data);
        if (response.data.token) {
          AsyncStorage.setItem("token", response.data.token).then(() => {
            //setItem permet de garder le token en mémoire
            // authentifier l'user
            this.setState({
              isAuthenticated: true
            });
            const { navigate } = this.props.navigation;
            navigate("List", {
              travelbooks: response.data.travelbooks
            });
          });
        }
      })
      .catch(error => {
        // handle error
        console.log("error", error);
      });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>Hello !</Text>
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
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>CONNECTION</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
