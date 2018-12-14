import React, { Component, Fragment } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  AsyncStorage
} from "react-native";
import StepCard from "../../components/StepCard";
import FreeCard from "../../components/FreeCard";
import axios from "axios";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
const countries = require("../SignupScreen/data/Countries.json");

export default class TipsListTest extends React.Component {
  static navigationOptions = {
    header: null,
    title: "Tips",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  };

  state = {
    travelbooks: [],
    countries: []
  };
  componentDidMount() {
    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);
      axios
        .get("https://back-tripizy.herokuapp.com/travelbook/", {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          this.setState({
            travelbooks: response.data
          });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
  render() {
    return (
      <Fragment>
        <ScrollView style={styles.container}>
          <View>
            <TouchableOpacity
            // onPress={() => {
            //   this.props.navigation.navigate("DetailsTravel");
            // }}
            >
              <StepCard />
            </TouchableOpacity>
          </View>

          <FreeCard />
          <StepCard />
        </ScrollView>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            // title="Go to Create a Travel Book"
            onPress={() => this.props.navigation.navigate("TipsFilter")}
          >
            <FontAwesomeIcon name="filter" size={30} color="#37449E" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPlace}>
          <Text
            style={styles.buttonText}
            // title="Go to Create a Travel Book"
            onPress={() => this.props.navigation.navigate("CityFilter")}
          >
            <FontAwesomeIcon name="globe" size={40} color="#37449E" />
          </Text>
        </TouchableOpacity>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 10
  },
  button: {
    position: "absolute",
    bottom: 10,
    alignSelf: "flex-end",
    shadowOpacity: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#EAE1E2",
    borderRadius: 100 / 2,
    right: 10
  },
  buttonPlace: {
    position: "absolute",
    bottom: 10,
    alignSelf: "flex-end",
    shadowOpacity: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#EAE1E2",
    borderRadius: 100 / 2,
    left: 10
  },
  buttonText: {
    fontSize: 30
  }
});
