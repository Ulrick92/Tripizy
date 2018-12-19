import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import StarRating from "react-native-star-rating";

export default class TipsCard extends React.Component {
  render() {
    return (
      <View style={styles.tipsCard}>
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
              <FontAwesomeIcon name="hotel" size={40} color="black" />
              <Text style={{ fontFamily: "Arial", fontSize: 12 }}>Hotel</Text>
            </View>
            <View
              style={{ marginleft: 5, justifyContent: "center", width: "56%" }}
            >
              <Text style={{ fontSize: 18, marginLeft: 12 }}>
                {this.props.company_name}
              </Text>
              <Text style={{ fontSize: 14, marginLeft: 12 }}>
                {this.props.city}
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center"
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <StarRating
                  style={{
                    justifyContent: "center"
                  }}
                  fullStarColor={"#ffc200"}
                  emptyStarColor={"#c9c3c3"}
                  starSize={20}
                  disabled={false}
                  maxStars={5}
                  rating={this.props.rating}
                />
              </View>
              <Text />
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
              source={require("../assets/images/bosnia.png")}
              style={styles.pictures}
            />
            <Image
              source={require("../assets/images/oman.png")}
              style={styles.pictures}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tipsCard: {
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
