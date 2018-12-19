import React, { Component, Fragment } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { StyleSheet, View, Text } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

export default class StepCard extends React.Component {
  render() {
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
          Day 1
        </Text>

        <Text
          style={{
            marginLeft: 5,
            color: "#37449E",
            padding: 3,
            fontSize: 15
          }}
        >
          Saturday 1st December
        </Text>

        <View style={{ justifyContent: "center", marginEnd: 10 }}>
          <FeatherIcon name="sun" size={25} color="#F6A019" />
        </View>
      </View>
    );
  }
}
