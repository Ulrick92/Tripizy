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
import geolib from "geolib";

var result = geolib.getCenter([
  { latitude: 10.298974, longitude: -85.837935 },
  { latitude: 10.594366, longitude: -85.544151 },
  { latitude: 10.260968, longitude: -85.584363 }
]);
console.log(result);

var tab = [
  { latitude: 10.298974, longitude: -85.837935 },
  { latitude: 10.594366, longitude: -85.544151 }
];

var delta = Math.max(tab);

export default class DetailsTravelBook extends React.Component {
  static navigationOptions = {
    title: "Map",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  };

  render() {
    return (
      console.log(result.latitude),
      console.log(result.delta),
      (
        <MapView
          style={{
            width: "100%",
            height: "100%",
            marginBottom: 10,
            shadowOpacity: 50
          }}
          initialRegion={{
            latitude: result.latitude,
            longitude: result.longitude,
            latitudeDelta: 0.495392,
            longitudeDelta: 0.4937
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
          <Marker
            coordinate={{ latitude: 10.260968, longitude: -85.584363 }}
            title="Liberia Airport"
          />
        </MapView>
      )
    );
  }
}
