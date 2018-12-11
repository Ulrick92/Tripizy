import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Platform,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import TravelBookCard from "../../components/TravelBookCard";

export default class MyTripsScreen extends Component {
  static navigationOptions = {
    title: "Travel Books",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  };

  state = {
    travelbooks: []
  };

  render() {
    console.log("this.state.travelbooks", this.state.travelbooks);
    // on vérifie que le this.state existe
    if (this.state.travelbooks !== undefined) {
      return (
        <ScrollView style={styles.container}>
          {/* mettre la card à cet endroit */}
          <TravelBookCard />

          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              title="Go to Create a Travel Book"
              onPress={() =>
                this.props.navigation.navigate("TitleAndDescription")
              }
            >
              +
            </Text>
          </TouchableOpacity>
        </ScrollView>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.loading}>Loading ...</Text>
        </View>
      );
    }
  }

  // componentDidMount() {
  //   axios.get("https://back-tripizy.herokuapp.com/user").then(response => {
  //     console.log("response.data", response.data);
  //     // on envoie les infos dans le state.travelbooks
  //     this.setState({
  //       travelbooks: response.data.travelbooks
  //     });
  //   });
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 100,
    position: "absolute"
    // marginBottom: 150
  },
  buttonText: {
    fontSize: 30
  }
});
