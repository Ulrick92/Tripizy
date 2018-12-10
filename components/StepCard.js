import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";

export default class StepCard extends React.Component {
  render() {
    return (
      <View style={styles.travelCard}>
        <ImageBackground
          source={require("../assets/images/bosnia.png")}
          style={styles.backgroundImage}
        />
        <Text style={{ marginLeft: 10 }} numberOfLines={5}>
          Description : Post haec Gallus Hierapolim profecturus ut expeditioni
          specie tenus adesset, Antiochensi plebi suppliciter obsecranti ut
          inediae dispelleret metum, quae per multas difficilisque causas adfore
          iam sperabatur, non ut mos est principibus, quorum diffusa potestas
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  travelCard: {
    flex: 1,
    margin: 10,
    flexDirection: "row"
  },
  backgroundImage: {
    width: 100,
    height: 100,
    justifyContent: "flex-end",
    shadowOpacity: 50
  }
});
