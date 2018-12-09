import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView
} from "react-native";
import MapView, { Marker } from "react-native-maps";

export default class DetailsTravelBook extends React.Component {
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
        <View style={styles.travelCard}>
          <ImageBackground
            source={require("../../assets/images/sri_lanka.png")}
            style={styles.backgroundImage}
          >
            <Text style={styles.textBackgroundImage}>Sri Lanka</Text>
            <Text style={styles.dateBackgroundImage}>
              December 2018 - 337 days
            </Text>
          </ImageBackground>

          {/* Bottom part Card */}

          <MapView
            style={{ width: "100%", height: 200 }}
            initialRegion={{
              latitude: 10.299167,
              longitude: -85.84,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            showsUserLocation={true}
          >
            <Marker
              coordinate={{ latitude: 10.298974, longitude: -85.837935 }}
              title="Casa Bobo"
              description="Temple of love"
            />
            <Marker
              coordinate={{ latitude: 10.594366, longitude: -85.544151 }}
              title="Liberia Airport"
            />
          </MapView>
        </View>
      </ScrollView>
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
    shadowOpacity: 50
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
  }
});
