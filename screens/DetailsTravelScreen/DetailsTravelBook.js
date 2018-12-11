import React from "react";
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
import Icon from "react-native-vector-icons/FontAwesome";
import StepCard from "../../components/StepCard";

export default class DetailsTravelBook extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Travel Books",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
    /* headerLeft: (
      <Icon size={15} name={"arrow-left"} onPress={() => navigation.goBack()} />
    ) */
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
            <View style={{ position: "relative" }}>
              <MapView
                style={{
                  width: "100%",
                  height: 200,
                  marginBottom: 10,
                  shadowOpacity: 50
                  // position: "absolute"
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
            </View>
          </TouchableOpacity>

          <View>
            <Text style={{ marginBottom: 10 }}>
              Description : Post haec Gallus Hierapolim profecturus ut
              expeditioni specie tenus adesset, Antiochensi plebi suppliciter
              obsecranti ut inediae dispelleret metum, quae per multas
              difficilisque causas adfore iam sperabatur, non ut mos est
              principibus.
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                backgroundColor: "#37449E",
                fontWeight: "bold",
                fontSize: 17,
                color: "white",
                padding: 3
              }}
            >
              Day 1
            </Text>
            <Text
              style={{
                width: 300,
                marginLeft: 5,

                backgroundColor: "#D9ECF2",
                color: "#37449E",
                padding: 3,
                fontSize: 15
              }}
            >
              Saturday 1st December
            </Text>
          </View>
          <StepCard />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            title="Go to Create a Travel Book"
            onPress={() => this.props.navigation.navigate("StepForm")}
          >
            +
          </Text>
        </TouchableOpacity>
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
