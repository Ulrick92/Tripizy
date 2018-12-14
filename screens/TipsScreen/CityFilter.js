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
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

export default class TipsFilter extends Component {
  static navigationOptions = {
    header: null,
    title: "Add a cart",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  };

  state = {
    category: ""
  };

  redirectToLoginPage = () => {
    this.props.navigation.navigate("Login");
  };

  handleSubmit = text => {
    const { category } = this.state;

    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      if (!token) {
        this.redirectToLoginPage();
      } else {
        this.props.navigation.navigate("TipsStack", {
          category: this.state.category
        });
        console.log(this.state.category);
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.hint}>Select a Country :</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.country}
          placeholder={"ex : France"}
          onChangeText={text => this.setState({ country: text })}
        />
        <Text style={styles.hint}>Select a City :</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.city}
          placeholder={"ex : Paris"}
          onChangeText={text => this.setState({ country: text })}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>FILTER</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "#37449E"
  },
  hint: {
    marginTop: 100,
    textAlign: "center",
    fontSize: 20,
    color: "#37449E"
  },
  container: {
    flex: 1,
    backgroundColor: "#EAE1E2",
    alignItems: "center"
  },
  input: {
    width: 250,
    height: 60,
    color: "#37449E",
    borderColor: "white",
    borderBottomWidth: 1,
    paddingLeft: 10,
    alignItems: "center"
  },
  button: {
    marginTop: 20,
    backgroundColor: "#37449E",
    height: 50,
    width: 250,
    justifyContent: "center",
    borderColor: "white",
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  category: {
    marginTop: 15,
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  categorylabel: {
    marginTop: 15,
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
