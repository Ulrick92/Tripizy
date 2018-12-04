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

export default class Login extends Component {
  state = {
    // vérifier si l'user est authentifié
    isAuthenticated: false,
    email: "arno@airbnb-api.com", // email à remplacer
    password: "password01" // password à remplacer
  };

  static navigationOptions = {
    title: "Login",
    headerStyle: {
      backgroundColor: "yellow"
    },
    headerTitleStyle: {
      fontSize: 24,
      color: "white",
      fontWeight: "200"
    }
  };

  handleSumbit = () => {
    const { email, password } = this.state;

    axios
      // api à remplacer
      .get("https://airbnb-api.now.sh/api/user/log_in", {
        email,
        password
      })
      .then(response => {
        if (response.data.token) {
          AsyncStorege.setItem("token", response.data.token).then(() => {
            // authentifier l'user
            this.setState({
              isAuthenticated: true
            });
            const { navigate } = this.props.navigation;
            navigate("Signup"); // Signup à remplacer par List
          });
        }
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.handleSubmit(item);
          }}
        >
          <Text style={styles.welcome}>Hello !</Text>

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
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    justifyContent: "center"
  },
  input: {
    width: 250,
    height: 60,
    color: "white",
    borderColor: "white",
    borderBottomWidth: 1,
    paddingLeft: 10
  },
  welcome: {
    textAlign: "center",
    fontSize: 30,
    color: "white"
  }
});
