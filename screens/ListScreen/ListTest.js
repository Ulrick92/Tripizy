import React from "react";
import { StyleSheet, View, Text } from "react-native";
import axios from "axios";

export default class ListTestScreen extends React.Component {
  //   state = {
  //     rooms: []
  //   };

  //   componentDidMount() {
  //     axios
  //       .get("https://airbnb-api.now.sh/api/room?city=paris")
  //       .then(response => {
  //         if (response.data) {
  //           this.setState({ rooms: response.data.rooms });
  //           console.log(response.data.rooms);
  //         }
  //       });
  //   }

  state = {
    isAuthenticated: false,
    travelbook: []
  };

  componentDidMount() {
    axios
      .get("https://back-tripizy.herokuapp.com/travelbook/")
      .then(response => {
        console.log("response", response.data);
        if (response.data) {
          this.setState({ rooms: response.data.travelbook });
          console.log(response.data.travelbook);
        }
      });
  }

  render() {
    return <Text>Hello World</Text>;
  }
}
