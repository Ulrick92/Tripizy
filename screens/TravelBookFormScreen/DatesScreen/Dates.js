import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import styles from "./styles";

export default class Dates extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Travel Books",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  });

  // static navigationOptions = {
  //   title: "Create a Travel Book",
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
    start_date: "",
    end_date: ""
  };

  redirectToLoginPage = () => {
    this.props.history.push("/log_in");
  };

  handleSubmit = event => {
    const { start_date, end_date } = this.state;
    const {
      title,
      description,
      country,
      countries
    } = this.props.navigation.state.params;

    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      if (!token) {
        this.redirectToLoginPage();
      } else {
        this.props.navigation.navigate("Photos", {
          title: title,
          description: description,
          countries: countries,
          country: country,
          start_date: start_date,
          end_date: end_date
        });
        console.log("title", title);
        console.log("description", description);
        // console.log("countries", countries);
        console.log("country", country);
        console.log(start_date);
        console.log(end_date);
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>Dates</Text>
        <Text style={styles.hint}>What are the dates ?</Text>
        <Text style={styles.indicator} />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.start_date}
          placeholder={"From : MM/DD/YYYY"}
          onChangeText={value => {
            this.setState({
              start_date: value
            });
          }}
        />
        <Text style={styles.indicator}> </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.end_date}
          placeholder={"To : MM/DD/YYYY"}
          onChangeText={value => {
            this.setState({
              end_date: value
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
