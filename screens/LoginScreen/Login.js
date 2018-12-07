import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import axios from "axios";
// import "./style";

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

    // title: "Login",
    // headerTintColor: "purple",
    // headerStyle: {
    //   backgroundColor: "yellow"
    // },
    // headerTitleStyle: {
    //   fontSize: 24,
    //   color: "purple",
    //   fontWeight: "200"
    // }
  };

  state = {
    // vérifier si l'user est authentifié
    isAuthenticated: false,
    email: "arno@airbnb-api.com", // email à remplacer
    password: "password01" // password à remplacer
  };

  handleSubmit = () => {
    const { email, password } = this.state;

    axios

      .post("http://localhost:3000/user/log_in", {
        email,
        password
      })
      .then(response => {
        console.log("response", response.data);
        if (response.data.token) {
          AsyncStorage.setItem("token", response.data.token).then(() => {
            // authentifier l'user
            this.setState({
              isAuthenticated: true
            });
            const { navigate } = this.props.navigation;
            navigate("Main"); // Main à remplacer par List

            AsyncStorage.getItem("token", (err, result) => {
              console.log("result", result);
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
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Hello !</Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={value => {
            this.setState({
              email: value
            });
          }}
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
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

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "white"
  },
  container: {
    flex: 1,
    backgroundColor: "#0040cc",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: 250,
    height: 60,
    color: "white",
    borderColor: "white",
    borderBottomWidth: 1,
    paddingLeft: 10,
    alignItems: "center"
  },
  button: {
    marginTop: 20,
    backgroundColor: "grey",
    height: 50,
    width: 250,
    justifyContent: "center",
    borderColor: "white",
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "white"
  }
});
