import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage,
  StyleSheet
} from "react-native";
// import styles from "./styles";
import axios from "axios";

export default class Category extends Component {
  static navigationOptions = {
    title: "Travelling Style",
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
    category: "Couple"
  };

  redirectToLoginPage = () => {
    this.props.history.push("/log_in");
  };

  handleSubmit = event => {
    const { category, title, country, city, start_date, end_date } = this.state;
    // const {

    // }

    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);
      console.log("title", this.props.navigation.state.params.title);
      console.log("country", this.props.navigation.state.params.country);
      console.log("city", this.props.navigation.state.params.city);
      console.log("start_date", this.props.navigation.state.params.start_date);
      console.log("end_date", this.props.navigation.state.params.end_date);

      if (!token) {
        this.redirectToLoginPage();
      } else {
        axios
          .post("https://back-tripizy.herokuapp.com/travelbook/publish", {
            title: this.props.navigation.state.params.title,
            country: this.props.navigation.state.params.country,
            city: this.props.navigation.state.params.city,
            start_date: this.props.navigation.state.params.Date.parse(
              start_date
            ),
            end_date: this.props.navigation.state.params.Date.parse(end_date),
            // title,
            // country,
            // city,
            // start_date: Date.parse(start_date),
            // end_date: Date.parse(end_date),
            category
          })
          .then(response => {
            console.log("response", response.data);
            this.props.navigation.navigate(
              "Preview",
              {
                title: response.data.title,
                description: response.data.description,
                country: response.data.country,
                city: response.data.city,
                start_date: response.data.start_date,
                end_date: response.data.end_date,
                // photos: response.data.photos,
                category: response.data.category
              },
              {
                headers: {
                  authorization: `Bearer ${token}`
                }
              }
            );
          })
          .catch(error => {
            console.log(error);
          });
        console.log("this.state", this.state);
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>CREATE A TRAVEL BOOK</Text>
        <Text style={styles.hint}>What is your travelling style ?</Text>
        {/* <Image
          style={styles.icon} */}
        {/* //   source={{ uri: this.state.user.travelbooks[i].photos[0] }} */}
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.category}
          placeholder={"ex : Select categories"}
          onChangeText={value => {
            this.setState({
              category: value
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

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "white"
  },
  hint: {
    textAlign: "center",
    fontSize: 20,
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
  }
});
