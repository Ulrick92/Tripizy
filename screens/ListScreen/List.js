import React, { Component, Fragment } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from "react-native";
import TravelBookCard from "../../components/TravelBookCard";
import axios from "axios";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export default class ListScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: "Travel Books",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  };

  state = {
    first_name: ""
  };

  render() {
    return (
      <Fragment>
        <ScrollView style={styles.container}>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("DetailsTravel");
              }}
            >
              <TravelBookCard />
            </TouchableOpacity>
          </View>
          <TravelBookCard />
          <TravelBookCard />
          <TravelBookCard />
          <TravelBookCard />
        </ScrollView>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            // title="Go to Create a Travel Book"
            onPress={() => this.props.navigation.navigate("MyTrips")}
          >
            <FontAwesomeIcon name="search" size={30} color="#37449E" />
          </Text>
        </TouchableOpacity>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE1E2"
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
  buttonText: {
    fontSize: 30
  }
});
