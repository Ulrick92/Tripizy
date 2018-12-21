import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import DatePicker from "react-native-datepicker";
import styles from "./styles";

export default class NamesAndBirthday extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Travel Books",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  });

  state = {
    first_name: "",
    last_name: "",
    birthday: ""
  };

  handleSubmit = text => {
    const { first_name, last_name, birthday } = this.state;

    if (first_name !== "" && first_name && last_name !== "" && last_name) {
      this.props.navigation.navigate("Email", {
        first_name: first_name,
        last_name: last_name,
        birthday: birthday
      });
      console.log("first_name", first_name);
      console.log("last_name", last_name);
      console.log("birthday", birthday);
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>First Name</Text>
          <TextInput
            style={styles.input}
            // autoCapitalize="none"
            value={this.state.first_name}
            placeholder={"First Name"}
            onChangeText={value => {
              this.setState({
                first_name: value
              });
            }}
          />
          <Text style={styles.title}>Last Name</Text>
          <TextInput
            style={styles.input}
            // autoCapitalize="none"
            value={this.state.last_name}
            placeholder={"Last Name"}
            onChangeText={value => {
              this.setState({
                last_name: value
              });
            }}
          />
          <Text style={styles.title}>Birthday</Text>
          <DatePicker
            style={styles.datePicker}
            date={this.state.birthday}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="1928-01-01"
            maxDate="2018-01-01"
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
              this.setState({ birthday: date });
            }}
          />
          {/* <TextInput
            style={styles.input}
            value={this.state.birthday}
            placeholder={"MM/DD/YYYY"}
            onChangeText={value => {
              this.setState({
                birthday: value
              });
            }}
          /> */}
          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
