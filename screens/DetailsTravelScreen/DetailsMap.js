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
    title: "Map",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  };

  render() {
    return (
      <MapView
        style={{
          width: "100%",
          height: 200,
          marginBottom: 10,
          shadowOpacity: 50
        }}
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
    );
  }
}
