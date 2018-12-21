import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage,
  StyleSheet
} from "react-native";
import axios from "axios";
import config from "../../config";
export default class Step1Form extends Component {
  static navigationOptions = {
    title: "Add a new day",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#37449E" //indigo FB
    },
    headerTitleStyle: {
      fontSize: 20,
      color: "white",
      fontWeight: "200"
    }
  };

  state = {
    travelbook_id: "5c1c1213184b4f0016fb78db",
    start_date: ""
  };

  redirectToLoginPage = () => {
    this.props.navigation.navigate("Login");
  };

  handleSubmit = event => {
    AsyncStorage.getItem("token", (err, token) => {
      // récupère le token
      console.log("token :", token);

      const { travelbook_id, start_date } = this.state;
      console.log("result :", this.state);

      if (!token) {
        this.redirectToLoginPage();
      } else {
        axios
          .post(
            `${config.DOMAIN}step/publish`,
            {
              travelbook_id: travelbook_id,
              start_date: this.state.start_date
            },
            {
              headers: {
                authorization: `Bearer ${token}`
              }
            }
          )

          .then(response => {
            console.log("response :", response.data);

            this.props.navigation.navigate("DetailsTravel", {
              start_date: response.data.start_date
            });
          })
          .catch(error => {
            console.log("Nom de l'erreur : ", error);
          });
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.hint}>What is the date of your step ?</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.start_date}
          placeholder={"MM/DD/YYYY"}
          onChangeText={value => this.setState({ start_date: value })}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "#37449E",
    marginBottom: 30,
    fontWeight: "200"
  },
  hint: {
    textAlign: "center",
    fontSize: 18,
    color: "#37449E",
    marginBottom: 10,
    fontWeight: "200"
  },
  container: {
    flex: 1,
    backgroundColor: "#EAE1E2",
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
    backgroundColor: "#37449E", //indigo FB
    height: 50,
    width: 250,
    justifyContent: "center",
    borderColor: "white",
    borderRadius: 5
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  }
});
