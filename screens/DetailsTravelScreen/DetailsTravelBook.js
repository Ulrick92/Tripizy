import React, { Component, Fragment } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  FlatList
} from "react-native";
import axios from "axios";
import config from "../../config";
import MapView, { Marker } from "react-native-maps";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import TipsCard from "../../components/TipsCard";
import StepCard from "../../components/StepCard";
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
  state = {
    travelbook: {},
    steps: [],
    mounted: false
  };
  componentDidMount() {
    AsyncStorage.getItem("token", (err, token) => {
      const { params } = this.props.navigation.state;
      // console.log("Params =>", params);
      axios
        .get(`${config.DOMAIN}travelbook/${params.id}`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          console.log("Response =>", response.data);
          this.setState({
            travelbook: response.data,
            steps: response.data.steps,
            mounted: true
          });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
  render() {
    const { travelbook, steps, mounted } = this.state;
    const date = new Date(travelbook.start_date);
    if (mounted) {
      return (
        <Fragment>
          <ScrollView style={styles.container}>
            <View style={styles.travelCard}>
              <ImageBackground
                source={{ uri: travelbook.photos[0] }}
                style={styles.backgroundImage}
              >
                <Text style={styles.textBackgroundImage}>
                  {travelbook.title}
                </Text>
                <Text style={styles.dateBackgroundImage}>
                  {date.toDateString()}
                </Text>
              </ImageBackground>

              <TouchableOpacity>
                <View>
                  <MapView
                    onPress={() => {
                      this.props.navigation.navigate("DetailsMap");
                    }}
                    style={styles.mapView}
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
                  Description : {travelbook.description}
                </Text>
              </View>
              <FlatList
                data={steps}
                keyExtractor={item => item._id}
                renderItem={item => {
                  console.log("Objet =>", item);
                  return (
                    // <TouchableOpacity
                    //   style={styles.itemContainer}
                    //   onPress={() =>
                    //     this.props.navigation.navigate("DetailsTravel", {
                    //       id: item._id
                    //     })
                    //   }
                    // >
                    // </TouchableOpacity>
                    <StepCard id={item["item"]._id} index={item["index"]} />
                  );
                }}
              />
              {/* <StepCard /> */}
              <View
                style={{
                  justifyContent: "center",
                  width: "100%"
                }}
              >
                <TipsCard />
                <FreeCard />
                <TipsCard />
              </View>
              {/* <StepCard /> */}
              <FreeCard />
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.button}>
            <Text onPress={() => this.props.navigation.navigate("StepForm")}>
              <MaterialIconsIcon name="add-circle" size={50} color="#37449E" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonTips}>
            <Text onPress={() => this.props.navigation.navigate("TipsForm")}>
              <MaterialIconsIcon name="hotel" size={40} color="#37449E" />
            </Text>
          </TouchableOpacity>
        </Fragment>
      );
    } else {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
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
  },
  mapView: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    shadowOpacity: 50
  }
});
