import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  Image
} from "react-native";
import { CheckBox } from "react-native-elements";
import "@expo/vector-icons";
import styles from "./styles";
import axios from "axios";
import config from "../../../config";
export default class Category extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Travel Books",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  });

  // static navigationOptions = {
  //   title: "Create a Travel Book",
  //   headerTintColor: "white",
  //   headerStyle: {
  //     backgroundColor: "#002982"
  //   },
  //   headerTitleStyle: {
  //     fontSize: 20,
  //     color: "white",
  //     fontWeight: "200"
  //   }
  // };

  state = {
    backpack: false,
    family: false,
    couple: false,
    comfort: false,
    worldTour: false,
    cruising: false,
    nature: false,
    roadTrip: false
  };

  redirectToLoginPage = () => {
    this.props.history.push("/log_in");
  };

  handleSubmit = event => {
    const {
      title,
      description,
      country,
      countries,
      start_date,
      end_date,
      photos
    } = this.props.navigation.state.params;

    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      categoriesToString = () => {
        console.log(this.state);
        const categoriesArray = [];
        const keysArray = Object.keys(this.state);
        const valuesArray = Object.values(this.state);

        for (let i = 0; i < keysArray.length; i++) {
          if (valuesArray[i] === true) {
            categoriesArray.push(keysArray[i]);
          }
        }
        return categoriesArray;
      };

      const valeur = categoriesToString();
      console.log(valeur); // va afficher categoriesArray

      if (!token) {
        this.redirectToLoginPage();
      } else {
        axios
          .post(
            `${config.DOMAIN}travelbook/publish`,
            {
              title: title,
              description: description,
              countries: countries,
              country: country,
              start_date: Date.parse(start_date),
              end_date: Date.parse(end_date),
              files: [photos],
              category: valeur
            },
            {
              headers: {
                authorization: `Bearer ${token}`
              }
            }
          )

          .then(response => {
            console.log("response", response.data);

            this.props.navigation.navigate("MyTrips", {
              title: response.data.title,
              description: response.data.description,
              countries: response.data.countries,
              country: response.data.country,
              city: response.data.city,
              start_date: response.data.start_date,
              end_date: response.data.end_date,
              photos: response.data.photos,
              category: response.data.category
            });
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.buttonContainer}>
          <Text style={styles.title}>Categories</Text>
          <Text style={styles.hint}>What is your travelling style ?</Text>
          <View style={styles.buttonRow}>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../../assets/icons/backpack-filled-50.png")}
              />
              <Text style={styles.label}>Backpack</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                style={styles.checkBox}
                checked={this.state.backpack}
                onPress={() =>
                  this.setState({ backpack: !this.state.backpack })
                }
              />
            </View>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../../assets/icons/family-filled-50.png")}
              />
              <Text style={styles.label}>Family</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.family}
                onPress={() => this.setState({ family: !this.state.family })}
              />
            </View>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../../assets/icons/love-filled-50.png")}
              />
              <Text style={styles.label}>Couple</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.couple}
                onPress={() => this.setState({ couple: !this.state.couple })}
              />
            </View>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../../assets/icons/diamond-filled-50.png")}
              />
              <Text style={styles.label}>Comfort</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.comfort}
                onPress={() => this.setState({ comfort: !this.state.comfort })}
              />
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../../assets/icons/europe-filled-50.png")}
              />
              <Text style={styles.label}>World Tour</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.worldTour}
                onPress={() =>
                  this.setState({ worldTour: !this.state.worldTour })
                }
              />
            </View>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../../assets/icons/cruise-ship-filled-50.png")}
              />
              <Text style={styles.label}>Cruising</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.cruising}
                onPress={() =>
                  this.setState({ cruising: !this.state.cruising })
                }
              />
            </View>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../../assets/icons/national-park-filled-50.png")}
              />
              <Text style={styles.label}>Nature</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.nature}
                onPress={() => this.setState({ nature: !this.state.nature })}
              />
            </View>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../../assets/icons/road-filled-50.png")}
              />
              <Text style={styles.label}>Road Trip</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.roadTrip}
                onPress={() =>
                  this.setState({ roadTrip: !this.state.roadTrip })
                }
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
