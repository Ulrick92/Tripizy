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
// import FontAwesomeFiveIcon from "react-native-vector-icons/FontAwesome5"; ne fonctionne pas
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import StarRating from "react-native-star-rating";

export default class StepForm extends Component {
  static navigationOptions = {
    title: "Restaurant",
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
        this.props.navigation.navigate("DetailsTravel", {
          //"Category sera la page qui s'affiche après avoir appuyé sur next
          category: this.state.category
        });
        console.log(this.state.category);
      }
    });
  };

  //   handleSubmit = event => {
  //     const { category } = this.state;

  //     AsyncStorage.getItem("token", (err, token) => {
  //       console.log("result", token);

  //       if (!token) {
  //         this.redirectToLoginPage();
  //       } else {
  //         axios
  //           .post("https://back-tripizy.herokuapp.com/tips/publish", {
  //             category
  //           })
  //           .then(response => {
  //             console.log("response", response.data);
  //             if (response.data && response.data.token) {
  //               this.props.navigation.navigate("List", {
  //                 _id: response.data._id,
  //                 category: response.data.category
  //               });
  //             }
  //           })
  //           .catch(error => {
  //             console.log(error);
  //           });
  //         event.preventDefault();
  //       }
  //     });
  //   };

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
              value={this.state.city}
              placeholder={"ex : Paris"}
              onChangeText={text => this.setState({ city: text })}
            />
          </View>
          {/* Input Adress */}
          <View style={styles.inputLine}>
            <Text style={{ fontSize: 18 }}>City :</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              value={this.state.adress}
              placeholder={"ex : 55 blvd Paul Smith"}
              onChangeText={text => this.setState({ adress: text })}
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
              value={this.state.adress}
              placeholder={"22/08/2018"}
              onChangeText={text => this.setState({ adress: text })}
            />
          </View>
          <View style={styles.inputLine}>
            <Text style={{ fontSize: 18 }}>to :</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              value={this.state.adress}
              placeholder={"23/08/2018"}
              onChangeText={text => this.setState({ adress: text })}
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
            <Text style={styles.buttonText}>NEXT</Text>
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
