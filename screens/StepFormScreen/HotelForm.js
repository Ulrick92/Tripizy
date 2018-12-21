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
import config from "../../config";
import axios from "axios";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import StarRating from "react-native-star-rating";

export default class StepForm extends Component {
  state = {
    step_id: "5c1c1259184b4f0016fb78dd",
    category: "Hotel",
    company_name: "Casa del Papel",
    city: "Vinales",
    start_date: "03/03/2015",
    end_date: "03/03/2015"
  };

  redirectToLoginPage = () => {
    this.props.navigation.navigate("Login");
  };

  handleSubmit = event => {
    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      const {
        step_id,
        category,
        company_name,
        city,
        start_date,
        end_date
      } = this.state;
      console.log("result :", this.state);

      if (!token) {
        this.redirectToLoginPage();
      } else {
        axios
          .post(
            `${config.DOMAIN}tips/publish`,
            {
              step_id: step_id,
              category: category,
              company_name: this.state.company_name,
              city: this.state.city,
              start_date: this.state.start_date,
              end_date: this.state.end_date
            },
            {
              headers: {
                authorization: `Bearer ${token}`
              }
            }
          )

          .then(response => {
            console.log("response :", response.data);

            this.props.navigation.navigate("DetailsTravel", {
              category: response.data.category,
              company_name: response.data.company_name,
              city: response.data.city,
              start_date: response.data.start_date,
              end_date: response.data.end_date
            });
          })
          .catch(error => {
            console.log("Nom de l'erreur : ", error);
          });
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.hint}>
          <FontAwesomeIcon name="hotel" size={50} color="black" />
        </Text>
        <View style={styles.containerForm}>
          {/* Input City */}
          <View style={styles.inputLine}>
            <Text style={{ fontSize: 18 }}>Hotel Name :</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              value={this.state.company_name}
              placeholder={"ex : Hotel California"}
              onChangeText={text => this.setState({ company_name: text })}
            />
          </View>
          {/* Input Adress */}
          <View style={styles.inputLine}>
            <Text style={{ fontSize: 18 }}>City :</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              value={this.state.city}
              placeholder={"ex : Ouagadougou"}
              onChangeText={text => this.setState({ city: text })}
            />
          </View>
          <View style={styles.inputLine}>
            <Text style={{ fontSize: 18 }}>Adress :</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              value={this.state.adress}
              placeholder={"ex : 55 blvd Paul Smith"}
              onChangeText={text => this.setState({ adress: text })}
            />
          </View>
          <View style={styles.inputLine}>
            <Text style={{ fontSize: 18 }}>Website link :</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              value={this.state.adress}
              placeholder={"ex : 55 blvd Paul Smith"}
              onChangeText={text => this.setState({ adress: text })}
            />
          </View>
          <View style={styles.inputLine}>
            <Text style={{ fontSize: 18 }}>From :</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              value={this.state.start_date}
              placeholder={"22/08/2018"}
              onChangeText={value => this.setState({ start_date: value })}
            />
          </View>
          <View style={styles.inputLine}>
            <Text style={{ fontSize: 18 }}>to :</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              value={this.state.end_date}
              placeholder={"23/08/2018"}
              onChangeText={value => this.setState({ end_date: value })}
            />
          </View>
          <View style={styles.inputLine}>
            <Text style={{ fontSize: 18 }}>Price per night :</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              value={this.state.adress}
              placeholder={"ex: 50"}
              onChangeText={text => this.setState({ adress: text })}
            />
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              value={this.state.adress}
              placeholder={"USD"}
              onChangeText={text => this.setState({ adress: text })}
            />
          </View>
          <View style={styles.inputLine}>
            <Text style={{ fontSize: 18 }}>Rating :</Text>
            <View style={{ flexDirection: "row" }}>
              <StarRating
                style={{ backgroundColor: "blue", justifyContent: "center" }}
                fullStarColor={"#ffc200"}
                emptyStarColor={"#c9c3c3"}
                starSize={30}
                disabled={false}
                maxStars={5}
                rating={this.props.rating}
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
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "#37449E"
  },
  hint: {
    marginTop: 0,
    textAlign: "center",
    fontSize: 20,
    color: "#37449E"
  },
  container: {
    flex: 1,
    backgroundColor: "#EAE1E2",
    alignItems: "center"
  },
  containerForm: {
    width: 350,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "white"
  },
  inputLine: {
    flexDirection: "row",
    padding: 10,
    width: "100%"
    // backgroundColor: "red"
  },
  input: {
    // width: "80%",
    fontSize: 18,
    marginLeft: 8,
    height: 25,
    padding: 5,
    color: "#37449E",
    borderColor: "white",
    borderBottomWidth: 1,
    // paddingLeft: 10,
    alignItems: "center",
    backgroundColor: "white"
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
  }
});
