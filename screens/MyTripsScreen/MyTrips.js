import React, { Component, Fragment } from "react";
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
    header: null,
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
    // on vérifie que le this.state existe
    if (this.state.travelbooks !== undefined) {
      return (
        <Fragment>
          <ScrollView>
            <View style={styles.container}>
              {/* mettre la card à cet endroit */}
              <TravelBookCard />
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              title="Go to Create a Travel Book"
              onPress={() =>
                this.props.navigation.navigate("TitleAndDescription", {
                  travelbooks: this.state.travelbooks
                })
              }
            >
              +
            </Text>
          </TouchableOpacity>
        </Fragment>
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    flexDirection: "row",
    position: "absolute",
    justifyContent: "flex-end"
  },
  loading: {
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    borderColor: "rgba(0,0,0,0.2)",
    width: 50,
    height: 50,
    backgroundColor: "#0040cc",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    right: 10
  },
  buttonText: {
    color: "white",
    fontSize: 30
  }
});
