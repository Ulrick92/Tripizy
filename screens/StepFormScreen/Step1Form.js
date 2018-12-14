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
    travelbook_id: "5c138f8afbbb0b0016afa70d",
    // title: "Mes vacs",
    start_date: ""
  };

  redirectToLoginPage = () => {
    this.props.navigation.navigate("Login");
  };

  //   handleSubmit = text => {
  //     const { start_date } = this.state;

  //     AsyncStorage.getItem("token", (err, token) => {
  //       console.log("result", token);

  //       if (!token) {
  //         this.redirectToLoginPage();
  //       } else {
  //         this.props.navigation.navigate("DetailsTravel", {
  //           start_date: this.state.start_date
  //         });
  //         console.log(this.state.start_date);
  //       }
  //     });
  //   };

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
            "https://back-tripizy.herokuapp.com/step/publish",
            {
              travelbook_id: travelbook_id,
              // title: title,
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
              // title: response.data.title,
              start_date: response.data.start_date
            });
          })
          .catch(error => {
            console.log("Nom de l'erreur : ", error);
          });
      }
    });
  };

  //   onPress = () => {
  //     const { title } = this.state;
  //     console.log("fais voir les states :", this.state);
  //     axios
  //       .post("https://back-tripizy.herokuapp.com/step/publish", {
  //         title: title
  //       })
  //       .then(response => {
  //         if (response.data.token) {
  //           AsyncStorage.multiSet([
  //             ["token", response.data.token],
  //             ["id", response.data._id]
  //           ]).then(() => {
  //             this.props.navigation.navigate("BikeDetails", {
  //               bikeId: response.data.id
  //             });
  //           });
  //         }
  //         this.props.navigation.navigate("BikeDetails");
  //       });
  //     console.log("fais voir les states 2", this.state);
  //   };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.hint}>What is the date of your step ?</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.start_date}
          placeholder={"From : MM/DD/YYYY"}
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
