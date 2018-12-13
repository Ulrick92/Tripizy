import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Button,
  StyleSheet
} from "react-native";
import styles from "./styles";
import axios from "axios";
import RNPickerSelect from "react-native-picker-select";
const countries = require("./data/Countries.json");

/* import "./style.css"; */

class SignUp extends Component {
  static navigationOptions = {
    title: "Sign Up",
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
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthday: "",
    countries: [],
    nationality: 77,
    adress: "",
    city: "",
    profile_pic: null,
    interest_area: []
  };

  handleSubmit = event => {
    const {
      first_name,
      last_name,
      birthday,
      email,
      password,
      confirmPassword,
      nationality,
      adress,
      city,
      profile_pic,
      interest_area
    } = this.state;
    const parsedDate = Date.parse(birthday);
    if (
      first_name !== "" &&
      first_name &&
      last_name !== "" &&
      last_name &&
      email !== "" &&
      email &&
      password !== "" &&
      password &&
      password === confirmPassword &&
      confirmPassword !== "" &&
      nationality
    ) {
      axios
        .post("https://back-tripizy.herokuapp.com/user/sign_up", {
          first_name,
          last_name,
          birthday: parsedDate,
          email,
          password,
          nationality,
          adress,
          city,
          profile_pic,
          interest_area
        })
        .then(response => {
          console.log("response", response.data);
          if (response.data && response.data.token) {
            this.props.navigation.navigate("List", {
              _id: response.data._id,
              first_name: response.data.first_name,
              last_name: response.data.last_name
              // profile_pic: response.data.profile_pic[0]
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }

    event.preventDefault();
  };
  componentDidMount() {
    this.setState({ countries });
  }
  render() {
    if (this.state.countries.length) {
      return (
        <ScrollView contentContainerStyle={styles.container}>
          <KeyboardAvoidingView behavior="padding" enabled>
            <View style={[styles.form]}>
              <Text style={styles.title}>CREATE AN ACCOUNT</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={this.state.first_name}
                placeholder={"First Name"}
                onChangeText={value => {
                  this.setState({
                    first_name: value
                  });
                }}
              />
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={this.state.last_name}
                placeholder={"Last Name"}
                onChangeText={value => {
                  this.setState({
                    last_name: value
                  });
                }}
              />
              <TextInput
                style={styles.input}
                value={this.state.birthday}
                placeholder={"MM/DD/YYYY"}
                onChangeText={value => {
                  this.setState({
                    birthday: value
                  });
                }}
              />
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={this.state.email}
                placeholder={"Email"}
                onChangeText={value => {
                  this.setState({
                    email: value
                  });
                }}
              />
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={this.state.password}
                placeholder={"Password"}
                secureTextEntry={true}
                onChangeText={value => {
                  this.setState({
                    password: value
                  });
                }}
              />
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={this.state.confirmPassword}
                placeholder={"Confirm password"}
                secureTextEntry={true}
                onChangeText={value => {
                  this.setState({
                    confirmPassword: value
                  });
                }}
              />
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={this.state.adress}
                placeholder={"Adress"}
                onChangeText={value => {
                  this.setState({
                    adress: value
                  });
                }}
              />
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={this.state.city}
                placeholder={"City"}
                secureTextEntry={true}
                onChangeText={value => {
                  this.setState({
                    city: value
                  });
                }}
              />
              <View style={[styles.viewSelect]}>
                <RNPickerSelect
                  style={{ ...pickerSelectStyles }}
                  pickerViewStyle={[styles.pickerViewStyle]}
                  buttonsViewStyle={[styles.pickerViewStyle]}
                  buttonsTextStyle={[styles.buttonsTextStyle]}
                  value={this.state.nationality}
                  items={this.state.countries}
                  onValueChange={value => {
                    console.log(value);
                    this.setState({
                      nationality: value
                    });
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={this.handleSubmit}
              >
                <Text style={styles.buttonText}>VALIDER</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      );
    }
    return (
      <View>
        <Text>Chargement</Text>
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

export default SignUp;

// const styles = StyleSheet.create({
//   title: {
//     textAlign: "center",
//     fontSize: 30,
//     color: "white"
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#0040cc",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   input: {
//     width: 250,
//     height: 60,
//     color: "white",
//     borderColor: "white",
//     borderBottomWidth: 1,
//     paddingLeft: 10,
//     alignItems: "center"
//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: "grey",
//     height: 50,
//     width: 250,
//     justifyContent: "center",
//     borderColor: "white",
//     borderRadius: 10
//   },
//   buttonText: {
//     color: "white",
//     textAlign: "center"
//   },
//   option: {
//     color: "white",
//     marginTop: 30
//   }
// });
