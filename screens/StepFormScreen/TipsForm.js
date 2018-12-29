import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  StyleSheet,
  View
} from "react-native";
import axios from "axios";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

export default class TipsForm extends Component {
  static navigationOptions = {
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
        this.props.navigation.navigate("HotelForm", {
          category: this.state.category,
          stepId: this.props.navigation.state.params.stepId
        });
        console.log(this.state.category);
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.hint}>Select a Category :</Text>
        <View style={styles.category}>
          <View style={{ alignItems: "center" }}>
            <FontAwesomeIcon
              name="hotel"
              size={50}
              color="black"
              onPress={() =>
                this.props.navigation.navigate("HotelForm", {
                  stepId: this.props.navigation.state.params.stepId
                })
              }
            />
            <Text style={{ fontFamily: "Arial", fontSize: 12 }}>Hotel</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <MaterialIconsIcon
              name="restaurant"
              size={50}
              color="black"
              onPress={() => this.props.navigation.navigate("RestaurantForm")}
            />
            <Text style={{ fontFamily: "Arial", fontSize: 12 }}>
              Restaurant
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <EntypoIcon name="drink" size={45} color="black" />
            <Text style={{ fontFamily: "Arial", fontSize: 12 }}>Bar/Club</Text>
          </View>
        </View>

        <View style={styles.category}>
          <View style={{ alignItems: "center" }}>
            <FontAwesomeIcon
              name="road"
              size={50}
              color="black"
              onPress={() =>
                this.props.navigation.navigate("RoadForm", {
                  stepId: this.props.navigation.state.params.stepId
                })
              }
            />
            <Text style={{ fontFamily: "Arial", fontSize: 12 }}>Road</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <MaterialIconsIcon name="directions-boat" size={50} color="black" />
            <Text style={{ fontFamily: "Arial", fontSize: 12 }}>Boat</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <MaterialIconsIcon name="directions-bike" size={50} color="black" />
            <Text style={{ fontFamily: "Arial", fontSize: 12 }}>Activity</Text>
          </View>
        </View>
        <View style={styles.category}>
          <View style={{ alignItems: "center" }}>
            <MaterialIconsIcon name="beach-access" size={50} color="black" />
            <Text style={{ fontFamily: "Arial", fontSize: 12 }}>Beach</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <EntypoIcon name="baidu" size={45} color="black" />
            <Text style={{ fontFamily: "Arial", fontSize: 12 }}>Animals</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <FontAwesomeIcon name="fort-awesome" size={50} color="black" />
            <Text style={{ fontFamily: "Arial", fontSize: 12 }}>Historic</Text>
          </View>
        </View>
        <View style={styles.category}>
          <View style={{ alignItems: "center" }}>
            <FontAwesomeIcon name="binoculars" size={50} color="black" />
            <Text style={{ fontFamily: "Arial", fontSize: 12 }}>See Point</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <FontAwesomeIcon name="pencil" size={50} color="black" />
            <Text style={{ fontFamily: "Arial", fontSize: 12 }}>Free Text</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <FontAwesomeIcon name="picture-o" size={50} color="black" />
            <Text style={{ fontFamily: "Arial", fontSize: 12 }}>Free Pics</Text>
          </View>
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
    marginTop: 50,
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
