import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
// import styles from "./styles";
import axios from "axios";

class Category extends Component {
  static navigationOptions = {
    title: "Travelling Style",
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
    category: ""
  };

  redirectToLoginPage = () => {
    this.props.history.push("/log_in");
  };

  handleSubmit = event => {
    const { category } = this.state;

    if (!this.props.user.token) {
      this.redirectToLoginPage();
    } else {
      axios
        .post("http://localhost:3000/travelbook/publish", {
          category
        })
        .then(response => {
          console.log("response", response.data);
          if (response.data && response.data.user_id) {
            this.props.navigation.navigate(
              "Preview",
              {
                _id: response.data._id,
                title: response.data.title,
                description: response.data.description,
                country: response.data.country,
                start_date: response.data.start_date,
                end_date: response.data.end_date,
                photos: response.data.photos,
                category: response.data.category
              },
              {
                headers: {
                  authorization: `Bearer ${this.props.user.token}`
                }
              }
            );
          }
        })
        .catch(error => {
          console.log(error);
        });
      event.preventDefault();
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>CREATE AN ACCOUNT</Text>
        <Text style={styles.hint}>What is your travelling style ?</Text>
        <Image
          style={styles.icon}
          //   source={{ uri: this.state.user.travelbooks[i].photos[0] }}

          onChangeText={value => {
            this.setState({
              category: value
            });
          }}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

export default Category;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "white"
  },
  hint: {
    textAlign: "center",
    fontSize: 20,
    color: "white"
  },
  container: {
    flex: 1,
    backgroundColor: "#0040cc",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginTop: 20,
    backgroundColor: "grey",
    height: 50,
    width: 250,
    justifyContent: "center",
    borderColor: "white",
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  }
});
