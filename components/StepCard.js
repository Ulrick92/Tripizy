import React, { Component, Fragment } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import axios from "axios";
import { StyleSheet, View, Text, AsyncStorage } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import config from "../config";

export default class StepCard extends React.Component {
  state = {
    step: {},
    tips: [],
    mounted: false
  };
  componentDidMount() {
    AsyncStorage.getItem("token", (err, token) => {
      axios
        .get(`${config.DOMAIN}step/${this.props.id}`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          console.log("StepState => ", response.data);
          this.setState({
            step: response.data,
            mounted: true
          });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
  render() {
    const { mounted, step } = this.state;
    const { index } = this.props;
    const date = new Date(step.start_date);
    if (mounted) {
      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5,
            //   borderRadius: 10,
            width: "100%",
            backgroundColor: "#D9ECF2"
          }}
        >
          <Text
            style={{
              backgroundColor: "#37449E",
              fontWeight: "bold",
              fontSize: 17,
              color: "white",
              padding: 3
            }}
          >
            Day {index + 1}
          </Text>

          <Text
            style={{
              marginLeft: 5,
              color: "#37449E",
              padding: 3,
              fontSize: 15
            }}
          >
            {date.toDateString()}
          </Text>

          <View style={{ justifyContent: "center", marginEnd: 10 }}>
            <FeatherIcon name="sun" size={25} color="#F6A019" />
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
  }
}
