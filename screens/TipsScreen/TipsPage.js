import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import StarRating from "react-native-star-rating";
import MapView, { Marker } from "react-native-maps";

export default class TipsPage extends React.Component {
  render() {
    return (
      <ScrollView style={{ margin: 10 }}>
        <View style={styles.tipsCard}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.imageProfile}
              source={require("../../assets/images/no_user.png")}
            />
          </View>

          <View style={styles.donneeName}>
            <Text style={styles.textName}>Laurent </Text>
            <Text style={styles.textName}>Bonnec</Text>
          </View>
          <View style={styles.donneeAgeCountry}>
            <Text style={styles.textAgeCountry}>34 ans, </Text>
            <Text style={styles.textAgeCountry}>French</Text>
          </View>

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
                style={{
                  marginleft: 5,
                  justifyContent: "center",
                  width: "56%"
                }}
              >
                <Text
                  style={{ fontSize: 18, marginLeft: 12, fontWeight: "bold" }}
                >
                  Le Ritz
                </Text>
                <Text style={{ fontSize: 14, marginLeft: 12 }}>
                  San Jose, Costa Rica
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "center"
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 5,
                    marginTop: 5
                  }}
                >
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
                <View
                  style={{
                    flexDirection: "row"
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16
                    }}
                  >
                    50$
                  </Text>
                  <Text> / night</Text>
                </View>
                <Text />
              </View>
            </View>

            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 5,
                borderColor: "grey",
                marginBottom: 5
              }}
            >
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold" }}>From: </Text>
                  <Text>01/01/2018</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 20 }}>
                  <Text style={{ fontWeight: "bold" }}>To: </Text>
                  <Text>12/02/2018</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Night(s): </Text>
                <Text>9</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Travelling mode : </Text>
                <Text>Family</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Adress : </Text>
                <Text>8th boulevard John Smith</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Contact : </Text>
                <Text>Armando Tello</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Link : </Text>
                <Text>www.casabobo.com</Text>
              </View>
            </View>

            <View>
              <MapView
                style={styles.mapView}
                initialRegion={{
                  latitude: 10.298974,
                  longitude: -85.837935,
                  latitudeDelta: 0.515392,
                  longitudeDelta: 0.4937
                }}
                showsUserLocation={true}
              >
                <Marker
                  coordinate={{
                    latitude: 10.298974,
                    longitude: -85.837935
                  }}
                  title="Casa Bobo"
                  description="Temple of love"
                />
              </MapView>
            </View>
            <Text style={{ marginBottom: 10 }}>
              Post haec Gallus Hierapolim profecturus ut expeditioni specie
              tenus adesset, Antiochensi plebi suppliciter obsecranti ut inediae
              dispelleret metum, quae per multas difficilisque causas adfore iam
              sperabatur, non ut mos est principibus, quorum diffusa potestas
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/images/bosnia.png")}
                style={styles.pictures}
              />
              <Image
                source={require("../../assets/images/oman.png")}
                style={styles.pictures}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  tipsPage: {
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
  },
  mapView: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    shadowOpacity: 50
  },
  imageProfile: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderWidth: 1,
    borderColor: "white"
  },
  donneeName: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 10,
    alignItems: "center"
  },
  donneeAgeCountry: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5
  },
  textName: {
    fontSize: 14,
    fontWeight: "bold"
  },
  textAgeCountry: {
    color: "grey"
  }
});
