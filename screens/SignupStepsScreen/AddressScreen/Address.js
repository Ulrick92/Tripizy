import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
const countries = require("../../SignupScreen/data/Countries.json");
import styles from "./styles";

export default class Address extends Component {
  static navigationOptions = {
    title: "Sign Up",
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
    adress: "",
    city: "",
    countries: [],
    nationality: 77
  };

  //   redirectToLoginPage = () => {
  //     this.props.navigation.navigate("Login");
  //   };

  handleSubmit = text => {
    const { address, city, countries, nationality } = this.state;

    if (
      nationality
      //   this.state.adress !== undefined &&
      //   this.state.city !== undefined && this.state.countries !== undefined && this.state.nationality !== undefined
    ) {
      axios
        .post("https://back-tripizy.herokuapp.com/travelbook/publish", {
          first_name: this.props.navigation.state.params.first_name,
          last_name: this.props.navigation.state.params.last_name,
          birthday: Date.parse(this.props.navigation.state.params.birthday),
          email: this.props.navigation.state.params.email,
          password: this.props.navigation.state.params.password,
          confirmPassword: this.props.navigation.state.params.confirmPassword,
          address: address,
          city: city,
          countries: countries,
          nationality: nationality
        })
        .then(response => {
          console.log("response", response.data);

          this.props.navigation.navigate("MyTrips", {
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            birthday: response.data.birthday,
            email: response.data.email,
            password: response.data.password,
            confirmPassword: response.data.confirmPassword,
            photos: response.data.photos,
            category: response.data.category,
            address: response.data.adress,
            city: response.data.city,
            // countries: response.data.countries,
            nationality: response.data.nationality
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  //   this.props.navigation.navigate("Email", {
  //     address: address,
  //     city: city,
  //     countries: countries,
  //     nationality: nationality
  //   });
  //   console.log(this.state.adress);
  //   console.log(this.state.city);
  //   console.log(this.state.countries);
  //   console.log(this.state.nationality);
  // } else {
  //   err;
  //   console.log("error", error);
  // }

  // axios
  //   .post(
  //     "https://back-tripizy.herokuapp.com/travelbook/publish",
  //       {
  //           first_name: this.props.navigation.state.params.first_name,
  //           last_name: this.props.navigation.state.params.last_name,
  //           birthday: Date.parse(this.props.navigation.state.params.birthday),
  //           email: this.props.navigation.state.params.email,
  //           password: this.props.navigation.state.params.password,
  //           confirmPassword: this.props.navigation.state.params.confirmPassword,
  //           address: address,
  //           city: city,
  //           countries: countries,
  //           nationality: nationality
  //       }
  //     )
  //     .then(response => {
  //       console.log("response", response.data);

  //       this.props.navigation.navigate("MyTrips", {
  //           first_name: response.data.first_name,
  //           last_name: response.data.last_name,
  //           birthday: response.data.birthday,
  //           email: response.data.email,
  //           password: response.data.password,
  //           confirmPassword: response.data.confirmPassword,
  //         photos: response.data.photos,
  //         category: response.data.category,
  //         address: response.data.adress,
  //       city: response.data.city,
  //       countries: response.data.countries,
  //       nationality: response.data.nationality
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   }
  // });
  // };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
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
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>VALIDER</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
