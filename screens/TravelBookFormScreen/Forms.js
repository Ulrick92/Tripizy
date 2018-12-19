import React, { Component } from "react";
import {
  AsyncStorage,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ReactFileReader,
  StyleSheet
} from "react-native";
// import styles from "./styles";
import axios from "axios";
import config from "../../config";

export default class Form extends Component {
  static navigationOptions = {
    title: "Create a Travel Book",
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
    title: "Summer holiday in Nice",
    description: "Lots of fun, but it was so hot.",
    country: "France",
    start_date: "08/01/2018",
    end_date: "08/15/2018",
    photos: [],
    category: "Backpacker"
  };

  redirectToLoginPage = () => {
    this.props.navigation.navigate("Login");
  };

  handleSubmit = event => {
    const {
      title,
      description,
      country,
      start_date,
      end_date,
      photos,
      category
    } = this.state;

    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      if (!token) {
        this.redirectToLoginPage();
      } else {
        axios
          .post(
            `${config.DOMAIN}travelbook/publish`,
            {
              title,
              description,
              country,
              start_date: Date.parse(start_date),
              end_date: Date.parse(end_date),
              photos,
              category
            },
            {
              headers: {
                authorization: `Bearer ${token}`
              }
            }
          )
          .then(response => {
            this.props.navigation.navigate("Login", {
              _id: response.data._id,
              title: response.data.title,
              description: response.data.description,
              country: response.data.country,
              start_date: response.data.start_date,
              start_date: response.data.end_date,
              photos: response.data.photos,
              category: response.data.description
            });
            console.log("response", response.data);
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
        <Text style={styles.hint}>What is the title of your travel book ?</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.title}
          placeholder={"ex : Honeymoon in Sri Lanka"}
          onChangeText={text => this.setState({ title: text })}
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.description}
          placeholder={"ex : We spent one week on the coast"}
          onChangeText={text => this.setState({ description: text })}
        />
        <Text style={styles.hint}>
          Which country are you planning to visit ?
        </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.country}
          placeholder={"Select a country"}
          onChangeText={value => {
            this.setState({
              country: value
            });
          }}
        />
        <Text style={styles.hint}>What are the dates ?</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.start_date}
          placeholder={"from : MM/DD/YYYY"}
          onChangeText={value => {
            this.setState({
              start_date: value
            });
          }}
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.end_date}
          placeholder={"to : MM/DD/YYYY"}
          onChangeText={value => {
            this.setState({
              end_date: value
            });
          }}
        />
        <Text style={styles.hint}>Do you want to add a cover picture ?</Text>
        <Text>Sélection des dernières photos</Text>
        <TouchableOpacity style={styles.clickableImage}>
          {" "}
          */}
          <ReactFileReader
            style={styles.picture}
            fileTypes={[".png", ".jpg"]}
            base64={true}
            multipleFiles={true} // `false si une seule image`
            handleFiles={this.handleFiles}
          />
        </TouchableOpacity>
        <Text>Click to import from your device</Text>
        <Text style={styles.hint}>What is your travelling style ?</Text>
        {/* <Image
          style={styles.icon}
          //   source={{ uri: this.state.user.travelbooks[i].photos[0] }}

          onChangeText={value => {
            this.setState({
              category: value
            });
          }}
        /> */}
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
    fontSize: 24,
    color: "white"
  },
  hint: {
    textAlign: "left",
    fontSize: 14,
    color: "white",
    marginTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: "#0040cc",
    // justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: 250,
    height: 50,
    color: "white",
    borderColor: "white",
    borderBottomWidth: 1,
    paddingLeft: 10,
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
