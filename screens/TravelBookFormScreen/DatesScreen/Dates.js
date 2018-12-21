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

export default class Dates extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Travel Books",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  });

  constructor(props) {
    super(props);
    this.state = {
      start_date: "2018-12-21",
      end_date: "2018-12-31",
      showPickerCheck: false
    };
  }

  // state = {
  //   start_date: "",
  //   end_date: ""
  // };

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
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
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
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={date => {
            this.setState({ end_date: date });
          }}
        />
        {/* <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.start_date}
          placeholder={"From : MM/DD/YYYY"}
          onChangeText={value => {
            this.setState({
              start_date: value
            });
          }}
        /> */}
        {/* <Text style={styles.indicator}> </Text> */}
        {/* <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.end_date}
          placeholder={"To : MM/DD/YYYY"}
          onChangeText={value => {
            this.setState({
              end_date: value
            });
          }}
        /> */}

        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
