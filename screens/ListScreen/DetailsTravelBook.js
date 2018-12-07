import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

export default class DetailsTravelBookScreen extends React.Component {
  static navigationOptions = {
    title: "Travel Books details",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  };

  state = {
    travels: []
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* mettre la card à cet endroit */}
        <View style={{ margin: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Text>Welcome Home</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
