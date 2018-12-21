import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import DatePicker from "react-native-datepicker";
import styles from "./styles";
import { Button } from "react-native-elements";

const datePickerCustomStyle = {
  dateIcon: {
    position: "absolute",
    left: 0,
    top: 4,
    marginLeft: 0
  },
  dateInput: {
    marginLeft: 36
  },
  placeholderText: {
    color: "white"
  },
  dateText: {
    color: "white"
  }
};
// test test test test
export default class Dates extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Travel Books",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  });

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
        console.log("start_date", start_date);
        console.log("end_date", end_date);
      }
    });
  };

  render() {
    // if ()

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>Dates</Text>
        <Text style={styles.hint}>What are the dates ?</Text>
        <Text style={styles.indicator} />
        <DatePicker
          style={styles.datePicker}
          date={this.state.start_date}
          mode="date"
          placeholder="select start date"
          format="YYYY-MM-DD"
          minDate="1998-01-01"
          maxDate="2038-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={datePickerCustomStyle}
          onDateChange={date => {
            this.setState({ start_date: date });
          }}
        />
        <DatePicker
          style={styles.datePicker}
          date={this.state.end_date}
          mode="date"
          placeholder="select end date"
          format="YYYY-MM-DD"
          minDate="1998-01-01"
          maxDate="2038-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={datePickerCustomStyle}
          onDateChange={date => {
            this.setState({ end_date: date });
          }}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
