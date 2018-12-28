import React, { Component } from "react";
import {
  Text,
  KeyboardAvoidingView,
  AsyncStorage,
  StyleSheet,
  View
} from "react-native";
import axios from "axios";
import { Fumi } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import config from "../../config";

export default class RoadForm extends Component {
  static navigationOptions = {
    title: "Transport",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  };

  state = {
    step_id: "5c139ed9fbbb0b0016afa716",
    category: "Transport",
    company_name: "",
    city: "",
    start_date: "",
    end_date: ""
  };

  redirectToLoginPage = () => {
    this.props.navigation.navigate("Login");
  };

  handleSubmit = event => {
    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      const {
        step_id,
        category,
        company_name,
        city,
        start_date,
        end_date
      } = this.state;
      console.log("result :", this.state);

      if (!token) {
        this.redirectToLoginPage();
      } else {
        axios
          .post(
            `${config.DOMAIN}tips/publish`,
            {
              step_id: step_id,
              category: category,
              company_name: this.state.company_name,
              city: this.state.city,
              start_date: this.state.start_date,
              end_date: this.state.end_date
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
              category: response.data.category,
              company_name: response.data.company_name,
              city: response.data.city,
              start_date: response.data.start_date,
              end_date: response.data.end_date
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
      <KeyboardAvoidingView behavior="padding">
        <View style={[styles.card2, { backgroundColor: "#a9ceca" }]}>
          <Text style={styles.title}>Fumi</Text>
          <Fumi
            label={"Course Name"}
            labelStyle={{ color: "#a3a3a3" }}
            inputStyle={{ color: "#f95a25" }}
            iconClass={FontAwesomeIcon}
            iconName={"university"}
            iconColor={"#f95a25"}
            iconSize={15}
          />
          <Fumi
            style={styles.input}
            label={"Degree"}
            iconClass={FontAwesomeIcon}
            iconName={"graduation-cap"}
            iconColor={"#77116a"}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginTop: 4
  },
  card2: {
    padding: 16
  },
  title: {
    paddingBottom: 16,
    textAlign: "center",
    color: "#404d5b",
    fontSize: 20,
    fontWeight: "bold",
    opacity: 0.8
  }
});
