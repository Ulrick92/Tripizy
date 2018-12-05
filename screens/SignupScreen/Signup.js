import React, { Component } from "react";
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

/* import "./style.css"; */

class Signup extends Component {
  static navigationOptions = {
    title: "Create an account",
    headerStyle: {
      backgroundColor: "yellow"
    },
    headerTitleStyle: {
      fontSize: 24,
      color: "white",
      fontWeight: "200"
    }
  };

  state = {
    username: "Farid",
    email: "farid@lereacteur.io",
    password: "azerty"
  };

//   handleChange = (event) => { 

//     const target = event.target,
//     const username = target.username,
//     const email = target.email,
//     const password = target.password
 
// this.setState({ 
//   [username]: value, 
//   [email]: value, 
//   [password]: value });

//   };
    
handleSubmit = event => {

  const { username, email, password } = this.state;

  axios
.post("https://airbnb-api.now.sh/api//user/sign_up"), {
username,
email,
password
}
.then(response => {
  console.log("response", response);
if (response.data && response.data.token) {
  username: response.data.account.username,
  _id: response.data._id,
  token: response.data.token
  }
  navigate("Signup"); // Signup à remplacer par List ?
})
.catch(error => {
  console.log(error)
});
event.preventDefault();
};
  
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.welcome}>CREATE AN ACCOUNT</Text>
        <TextInput
          style={styles.input}
          value={this.state.name}
          placeholder={"Username"}
          onChangeText={value => {
            this.setState({
              name: value
            });
          }}
        />
        <TextInput
          style={styles.input}
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
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>

        <Text>Login with Facebook or Google</Text>
      </KeyboardAvoidingView>
    );
  }
}

export default Signup;






