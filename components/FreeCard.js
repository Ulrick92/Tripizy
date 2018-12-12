import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
// import FontAwesomeFiveIcon from "react-native-vector-icons/FontAwesome5"; ne fonctionne pas
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import StarRating from "react-native-star-rating";

export default class FreeCard extends React.Component {
  render() {
    return (
      <View style={styles.stepCard}>
        <View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#EAE1E2",
              marginBottom: 5,
              borderRadius: 10
            }}
          >
            <View style={{ alignItems: "center", marginLeft: 5 }}>
              <FontAwesomeIcon name="pencil" size={40} color="black" />
            </View>
            <View
              style={{ marginleft: 5, justifyContent: "center", width: "56%" }}
            >
              <Text style={{ fontSize: 18, marginLeft: 12 }}>
                Best day ever!
              </Text>
              <Text style={{ fontSize: 14, marginLeft: 12 }}>
                San Jose, Costa Rica
              </Text>
            </View>
          </View>

          <Text style={{ marginBottom: 10 }} numberOfLines={5}>
            Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus
            adesset, Antiochensi plebi suppliciter obsecranti ut inediae
            dispelleret metum, quae per multas difficilisque causas adfore iam
            sperabatur, non ut mos est principibus, quorum diffusa potestas
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/images/brazil1.png")}
              style={styles.pictures}
            />
            <Image
              source={require("../assets/images/brazil2.png")}
              style={styles.pictures}
            />
            <Image
              source={require("../assets/images/brazil3.png")}
              style={styles.pictures}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stepCard: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    flex: 1,
    flexDirection: "row",
    marginBottom: 10
  },
  pictures: {
    width: 100,
    height: 100,
    justifyContent: "flex-end",
    shadowOpacity: 50,
    borderRadius: 10,
    marginRight: 5
  }
});
