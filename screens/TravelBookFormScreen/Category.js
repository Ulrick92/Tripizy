import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  Image,
  StyleSheet
} from "react-native";
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
    category: "Solo"
  };

  redirectToLoginPage = () => {
    this.props.history.push("/log_in");
  };

  handlePress = () => {
    this.setState({
      category: value
    });
  };

  handleSubmit = event => {
    const { category } = this.state;

    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);
      console.log("title", this.props.navigation.state.params.title);
      console.log("country", this.props.navigation.state.params.country);
      console.log("city", this.props.navigation.state.params.city);
      console.log("start_date", this.props.navigation.state.params.start_date);
      console.log("end_date", this.props.navigation.state.params.end_date);
      console.log("photos", this.props.navigation.state.params.photos);

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
              category
            },
            {
              headers: {
                authorization: `Bearer ${token}`
              }
            }
          )
          .then(response => {
            console.log("response", response.data);
            this.props.navigation.navigate("LogIn", {
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
        <Text style={styles.title}>CREATE A TRAVEL BOOK</Text>
        <Text style={styles.hint}>What is your travelling style ?</Text>
        {/* <Image
          style={styles.icon} */}
        {/* //   source={{ uri: this.state.user.travelbooks[i].photos[0] }} */}
        {/* <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.category}
          placeholder={"ex : Select categories"}
          onChangeText={value => {
            this.setState({
              category: value
            });
          }}
        /> */}
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={this.handlePress}>
            <Image
              style={styles.buttonIcon}
              title="backpacker"
              value={this.state.category}
              source={require("../../assets/icons/backpack-50.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handlePress}>
            <Image
              style={styles.buttonIcon}
              title="family"
              value={this.state.category}
              source={require("../../assets/icons/family-50.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handlePress}>
            <Image
              style={styles.buttonIcon}
              title="business"
              value={this.state.category}
              source={require("../../assets/icons/suitcase-50.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handlePress}>
            <Image
              style={styles.buttonIcon}
              title="luxe"
              value={this.state.category}
              source={require("../../assets/icons/diamond-50.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={this.handlePress}>
            <Image
              style={styles.buttonIcon}
              title="world-tour"
              value={this.state.category}
              source={require("../../assets/icons/europe-filled-50.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handlePress}>
            <Image
              style={styles.buttonIcon}
              title="cruising"
              value={this.state.category}
              source={require("../../assets/icons/cruise-ship-filled-50.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handlePress}>
            <Image
              style={styles.buttonIcon}
              title="nature"
              value={this.state.category}
              source={require("../../assets/icons/national-park-filled-50.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handlePress}>
            <Image
              style={styles.buttonIcon}
              title="road-trip"
              value={this.state.category}
              source={require("../../assets/icons/road-filled-50.png")}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    marginBottom: 30,
    fontWeight: "200"
  },
  hint: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    marginBottom: 10,
    fontWeight: "200"
  },
  container: {
    flex: 1,
    backgroundColor: "#0040cc",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: 250,
    height: 60,
    color: "white",
    borderColor: "white",
    borderBottomWidth: 1,
    paddingLeft: 10,
    alignItems: "center"
  },
  buttonRow: {
    flexDirection: "row",
    display: "flex",
    marginVertical: 20
  },
  buttonIcon: {
    height: 30,
    width: 30
  },
  button: {
    marginTop: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    height: 50,
    width: 250,
    justifyContent: "center",
    borderColor: "white",
    borderRadius: 5
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  }
});
