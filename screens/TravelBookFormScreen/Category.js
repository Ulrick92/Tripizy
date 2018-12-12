import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  Icon,
  Image,
  StyleSheet
} from "react-native";
import { CheckBox } from "react-native-elements";
import "@expo/vector-icons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
// import styles from "./styles";
import axios from "axios";

export default class Category extends Component {
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
    backpack: false,
    family: false,
    work: false,
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
            "https://back-tripizy.herokuapp.com/travelbook/publish",
            {
              title: this.props.navigation.state.params.title,
              country: this.props.navigation.state.params.country,
              city: this.props.navigation.state.params.city,
              start_date: Date.parse(
                this.props.navigation.state.params.start_date
              ),
              end_date: Date.parse(this.props.navigation.state.params.end_date),
              photos: this.props.navigation.state.params.photos,
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

            this.props.navigation.navigate("TravelBookCard", {
              title: response.data.title,
              description: response.data.description,
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
          <Text style={styles.title}>CREATE A TRAVEL BOOK</Text>
          <Text style={styles.hint}>What is your travelling style ?</Text>
          <View style={styles.buttonRow}>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../assets/icons/backpack-filled-50.png")}
              />
              {/* <FontAwesomeIcon name=“hotel” size={50} color=“black” /> */}
              <Text style={styles.label}>Backpack</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                style={styles.checkBox}
                checked={this.state.backpack}
                onPress={() =>
                  this.setState({ backpack: !this.state.backpack })
                }
                // onPress={() => this.setState(this.handlePress)}
              />
            </View>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../assets/icons/family-filled-50.png")}
              />
              <Text style={styles.label}>Family</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.family}
                onPress={() => this.setState({ family: true })}
                // onPress={() => this.setState(this.handlePress)}
              />
            </View>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../assets/icons/suitcase-filled-50.png")}
              />
              <Text style={styles.label}>Work</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.work}
                onPress={() => this.setState({ work: true })}
                // onPress={() => this.setState(this.handlePress)}
              />
            </View>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../assets/icons/diamond-filled-50.png")}
              />
              <Text style={styles.label}>Comfort</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.comfort}
                onPress={() => this.setState({ comfort: true })}
                // onPress={() => this.setState(this.handlePress)}
              />
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../assets/icons/europe-filled-50.png")}
              />
              <Text style={styles.label}>World Tour</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.worldTour}
                onPress={() => this.setState({ worldTour: true })}
                // onPress={() => this.setState(this.handlePress)}
              />
            </View>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../assets/icons/cruise-ship-filled-50.png")}
              />
              <Text style={styles.label}>Cruising</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.cruising}
                onPress={() => this.setState({ cruising: true })}
                // onPress={() => this.setState(this.handlePress)}
              />
            </View>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../assets/icons/national-park-filled-50.png")}
              />
              <Text style={styles.label}>Nature</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.nature}
                onPress={() => this.setState({ nature: true })}
                // onPress={() => this.setState(this.handlePress)}
              />
            </View>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../assets/icons/road-filled-50.png")}
              />
              <Text style={styles.label}>Road Trip</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.roadTrip}
                onPress={() => this.setState({ roadTrip: true })}
                // onPress={() => this.setState(this.handlePress)}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0040cc"
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    marginVertical: 30,
    fontWeight: "200"
  },
  hint: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    marginBottom: 10,
    fontWeight: "200"
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 30,
    justifyContent: "space-around"
  },
  buttonIcon: {
    flexDirection: "column",
    alignItems: "center"
  },
  label: {
    color: "white",
    marginVertical: 10
  },
  checkBox: {},
  button: {
    marginTop: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    height: 50,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderRadius: 5
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  textStyle: {
    display: "none"
  },
  containerStyle: {
    width: 60,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});
