import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  StyleSheet
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import styles from "./styles";
const countries = require("../../SignupStepsScreen/AddressScreen/data/Countries.json");

export default class Country extends Component {
  static navigationOptions = {
    title: "Create a Travel Book",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#002982"
    },
    headerTitleStyle: {
      fontSize: 20,
      color: "white",
      fontWeight: "200"
    }
  };

  state = {
    countries: [],
    country: 77
  };

  redirectToLoginPage = () => {
    this.props.history.push("/log_in");
  };

  handleSubmit = event => {
    // const { country } = this.state;

    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      if (!token) {
        this.redirectToLoginPage();
      } else {
        this.props.navigation.navigate("Dates", {
          title: this.props.navigation.state.params.title,
          description: this.props.navigation.state.params.description,
          countries: this.state.countries,
          country: this.state.country
        });
        console.log("title", this.props.navigation.state.params.title);
        console.log(
          "description",
          this.props.navigation.state.params.description
        );
        // console.log(this.state.countries);
        console.log(this.state.country);
      }
    });
  };
  componentDidMount() {
    this.setState({ countries });
  }

  render() {
    if (this.state.countries.length) {
      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Text style={styles.title}>Countries</Text>
          <Text style={styles.hint}>
            Which countries are you planning to visit ?
          </Text>

          <View style={[styles.viewSelect]}>
            <RNPickerSelect
              style={{ ...pickerSelectStyles }}
              pickerViewStyle={[styles.pickerViewStyle]}
              buttonsViewStyle={[styles.pickerViewStyle]}
              buttonsTextStyle={[styles.buttonsTextStyle]}
              value={this.state.country}
              items={this.state.countries}
              onValueChange={value => {
                console.log(value);
                this.setState({
                  country: value
                });
              }}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      );
    }
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    backgroundColor: "#fff",
    color: "#000"
  },
  inputAndroid: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    backgroundColor: "white",
    color: "black"
  }
});
