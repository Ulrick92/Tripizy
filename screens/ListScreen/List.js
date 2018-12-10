import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from "react-native";
import TravelBookCard from "../../components/TravelBookCard";
import axios from "axios";

export default class ListScreen extends React.Component {
  static navigationOptions = {
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
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            title="Go to Create a Travel Book"
            // onPress={() =>
            //   this.props.navigation.navigate("TitleAndDescription")
            // }
          >
            +
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE1E2"
  },
  button: {
    alignSelf: "flex-end",
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 100,
    position: "absolute",
    right: 10

    // marginBottom: 150
  },
  buttonText: {
    fontSize: 30
  }
});
