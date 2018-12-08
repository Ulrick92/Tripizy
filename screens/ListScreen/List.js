import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import TravelBookCard from "../../components/TravelBookCard";

export default class ListScreen extends React.Component {
  static navigationOptions = {
    title: "Travel Books",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <TravelBookCard />
        <TravelBookCard />
        <TravelBookCard />
        <TravelBookCard />
        <TravelBookCard />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
