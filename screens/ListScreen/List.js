import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
