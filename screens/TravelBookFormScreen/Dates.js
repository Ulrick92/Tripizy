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

class Dates extends Component {
  static navigationOptions = {
    title: "Dates",
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
    start_date: "03/02/2019",
    end_date: "03/16/2019"
  };

  redirectToLoginPage = () => {
    this.props.history.push("/log_in");
  };

  handleSubmit = event => {
    const { start_date, end_date } = this.state;

    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      if (!token) {
        this.redirectToLoginPage();
      } else {
        // axios
        //   .post("http://localhost:3000/travelbook/publish", {
        //     start_date,
        //     end_date
        //   })
        //   .then(response => {
        //     console.log("response", response.data);
        this.props.navigation.navigate("Category", {
          title: this.props.navigation.state.params.title,
          country: this.props.navigation.state.params.country,
          city: this.props.navigation.state.params.city,
          start_date: this.state.start_date,
          end_date: this.state.end_date
        });
        console.log("title", this.props.navigation.state.params.title);
        console.log("country", this.props.navigation.state.params.country);
        console.log("city", this.props.navigation.state.params.city);
        console.log(this.state.start_date);
        console.log(this.state.end_date);
        //       {
        //         headers: {
        //           authorization: `Bearer ${this.props.user.token}`
        //         }
        //       }
        //     );
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   });
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>CREATE A TRAVEL BOOK</Text>
        <Text style={styles.hint}>What are the dates ?</Text>
        <Text style={styles.indicator}>From : </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.start_date}
          placeholder={"ex : MM/DD/YYYY"}
          onChangeText={value => {
            this.setState({
              start_date: value
            });
          }}
        />
        <Text style={styles.indicator}>To : </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.end_date}
          placeholder={"ex : MM/DD/YYYY"}
          onChangeText={value => {
            this.setState({
              start_date: value
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

export default Dates;

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
