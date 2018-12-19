import React, { Component, Fragment } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  AsyncStorage,
  FlatList
} from "react-native";
import TipsCard from "../../components/TipsCard";
import FreeCard from "../../components/FreeCard";
import axios from "axios";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
const countries = require("../SignupStepsScreen/AddressScreen/data/Countries.json");
import config from "../../config";
import StepCard from "../../components/StepCard";

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
    tips: []
  };

  _keyExtractor = (item, index) => item._id; //permet d'enlever les messages d'erreurs

  componentDidMount() {
    AsyncStorage.getItem("token", (err, token) => {
      console.log("result token TipsList :", token);
      axios
        .get(`${config.DOMAIN}tips/`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          console.log("response", response.data);
          this.setState({
            tips: response.data
          });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
  render() {
    return (
      <FlatList
        keyExtractor={this._keyExtractor}
        data={this.state.tips}
        renderItem={({ item }) => {
          console.log("TipsList :", item);
          return (
            <View>
              <Text>{item.category}</Text>
              <Text>{item.company_name}</Text>
              <Text>{item.city}</Text>
              <Text>{item.start_date}</Text>
              <Text>{item.end_date}</Text>
              <StepCard />
              <TipsCard
                company_name={item.company_name}
                city={item.city}
                photos={item.photos[0]}
                rate={item.rate[0]}
                pricePerDay={item.pricePerDay}
              />
            </View>
          );
        }}
      />
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
