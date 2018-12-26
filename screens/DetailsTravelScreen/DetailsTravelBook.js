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
import styles from "./styles";
import config from "../../config";
import MapView, { Marker } from "react-native-maps";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import TipsCard from "../../components/TipsCard";
import StepCard from "../../components/StepCard";
import FreeCard from "../../components/FreeCard";
import geolib from "geolib";
import ActionButton from "react-native-action-button";

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
      console.log("Params =>", params);

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
    const travelbook_id = travelbook._id;

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
                    <StepCard id={item["item"]._id} index={item["index"]} />
                  );
                }}
              />
              {/* <View
                style={{
                  justifyContent: "center",
                  width: "100%"
                }}
              >
                <TipsCard />
                <FreeCard />
                <TipsCard />
              </View>
              <FreeCard /> */}
            </View>
          </ScrollView>

          <ActionButton buttonColor="#37449E">
            <ActionButton.Item
              buttonColor="#9b59b6" //violet
              title="Add a Tips"
              onPress={() => this.props.navigation.navigate("TipsForm")}
            >
              <MaterialIconsIcon
                name="star-border"
                style={styles.actionButtonIcon}
              />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor="#1abc9c" //vert
              title="Add a Step"
              onPress={() =>
                this.props.navigation.navigate("StepForm", {
                  travelbook_id: travelbook_id
                })
              }
            >
              <MaterialIconsIcon
                name="add-circle"
                style={styles.actionButtonIcon}
              />
            </ActionButton.Item>
          </ActionButton>
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
