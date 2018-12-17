import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage,
  StyleSheet,
  View
} from "react-native";
import axios from "axios";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
// import FontAwesomeFiveIcon from "react-native-vector-icons/FontAwesome5"; ne fonctionne pas
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import StarRating from "react-native-star-rating";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Rating
} from "react-native-elements";

export default class StepForm extends Component {
  static navigationOptions = {
    title: "Restaurant",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  };

  state = {
    step_id: "5c139ed9fbbb0b0016afa716",
    category: "Restaurant",
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
            "https://back-tripizy.herokuapp.com/tips/publish",
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

  ratingCompleted(rating) {
    console.log("Rating is: " + rating);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.hint}>
          <MaterialIconsIcon name="restaurant" size={50} color="black" />
        </Text>

        <FormLabel>Restaurant Name</FormLabel>
        <FormInput
          onChangeText={text => this.setState({ company_name: text })}
        />
        <FormValidationMessage>
          {"This field is required"}
        </FormValidationMessage>
        <FormLabel>City</FormLabel>
        <FormInput onChangeText={text => this.setState({ city: text })} />
        <FormValidationMessage>
          {"This field is required"}
        </FormValidationMessage>

        <Rating
          showRating
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
        />

        <Rating
          type="heart"
          ratingCount={5}
          fractions={2}
          startingValue={0}
          imageSize={40}
          onFinishRating={this.ratingCompleted}
          showRating
          style={{ paddingVertical: 10 }}
        />
        <Rating showRating fractions={1} startingValue={3.3} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  hint: {
    marginTop: 0,
    textAlign: "center",
    fontSize: 20,
    color: "#37449E"
  },
  container: {
    flex: 1,
    backgroundColor: "#EAE1E2",
    alignItems: "center"
  }
});
