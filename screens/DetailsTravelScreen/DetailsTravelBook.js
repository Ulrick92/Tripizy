import React, { Component, Fragment } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import MapView, { Marker } from "react-native-maps";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import StepCard from "../../components/StepCard";
import DaysCard from "../../components/DaysCard";
import FreeCard from "../../components/FreeCard";
import geolib from "geolib";

var result = geolib.getCenter([
  { latitude: 10.298974, longitude: -85.837935 },
  { latitude: 10.594366, longitude: -85.544151 },
  { latitude: 10.260968, longitude: -85.584363 }
]);
export default class DetailsTravelBook extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Travel Books",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  });
  // static navigationOptions = ({ navigation }) => ({
  //   title: "Mon Airbnb",
  //   headerLeft: (
  //     <Icon
  //       style={[styles.goBack]}
  //       size={15}
  //       name={"arrow-left"}
  //       onPress={() => {
  //         navigation.goBack();
  //       }}
  //     />
  //   )
  // });

  render() {
    return (
      console.log(result.latitude),
      console.log(result.longitude),
      (
        <Fragment>
          <ScrollView style={styles.container}>
            <View style={styles.travelCard}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("DetailsMap");
                }}
              >
                <ImageBackground
                  source={require("../../assets/images/sri_lanka.png")}
                  style={styles.backgroundImage}
                >
                  <Text style={styles.textBackgroundImage}>Sri Lanka</Text>
                  <Text style={styles.dateBackgroundImage}>
                    December 2018 - 337 days
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
              {/* Bottom part Card */}
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("DetailsMap");
                }}
              >
                <View>
                  <MapView
                    onPress={() => {
                      this.props.navigation.navigate("DetailsMap");
                    }}
                    style={{
                      width: "100%",
                      height: 200,
                      marginBottom: 10,
                      shadowOpacity: 50
                      // position: "absolute"
                    }}
                    initialRegion={{
                      latitude: 10.494795,
                      longitude: -85.685515,
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
                    <Marker
                      coordinate={{
                        latitude: 10.594366,
                        longitude: -85.544151
                      }}
                      title="Liberia Airport"
                    />
                    <Marker
                      coordinate={{
                        latitude: 10.260968,
                        longitude: -85.584363
                      }}
                      title="Liberia Airport"
                    />
                  </MapView>
                </View>
              </TouchableOpacity>
              <View>
                <Text style={{ marginBottom: 10 }}>
                  Description : Post haec Gallus Hierapolim profecturus ut
                  expeditioni specie tenus adesset, Antiochensi plebi
                  suppliciter obsecranti ut inediae dispelleret metum, quae per
                  multas difficilisque causas adfore iam sperabatur, non ut mos
                  est principibus.
                </Text>
              </View>
              <DaysCard />
              <View
                style={{
                  justifyContent: "center",
                  width: "100%"
                }}
              >
                <StepCard />
                <FreeCard />
                <StepCard />
              </View>
              <DaysCard />
              <FreeCard />
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.button}>
            <Text
              title="Go to Create a Step"
              onPress={() => this.props.navigation.navigate("StepForm")}
            >
              <MaterialIconsIcon name="add-circle" size={50} color="#37449E" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonTips}>
            <Text
              title="Go to Create a Step"
              onPress={() => this.props.navigation.navigate("TipsForm")}
            >
              <MaterialIconsIcon name="hotel" size={40} color="#37449E" />
            </Text>
          </TouchableOpacity>
        </Fragment>
      )
    );
  }
}

const styles = StyleSheet.create({
  travelCard: {
    flex: 1,
    margin: 10
  },
  backgroundImage: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
    shadowOpacity: 50,
    marginBottom: 5
  },
  textBackgroundImage: {
    padding: 5,
    position: "absolute",
    bottom: 20, //pour augmenter ou descendre le texte dans l'image
    left: 10,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    fontSize: 20
  },
  dateBackgroundImage: {
    padding: 2,
    position: "absolute",
    bottom: 2, //pour augmenter ou descendre le texte dans l'image
    left: 10,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    fontSize: 10
  },

  bottomPart: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#A3BADC"
  },
  userPart: {
    justifyContent: "center",
    backgroundColor: "#A3BADC",
    padding: 5,
    shadowOpacity: 50
  },
  descriptionPart: {
    // backgroundColor: "#A3BADC",
    paddingLeft: 10,
    width: 291
  },
  button: {
    position: "absolute",
    bottom: 25,
    right: 25,
    alignSelf: "flex-end",
    shadowOpacity: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#EAE1E2",
    borderRadius: 100 / 2
  },
  buttonTips: {
    position: "absolute",
    bottom: 25,
    left: 25,
    alignSelf: "flex-end",
    shadowOpacity: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#EAE1E2",
    borderRadius: 100 / 2
  }
});
