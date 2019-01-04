import React, { Component, Fragment } from "react";
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
import DatePicker from "react-native-datepicker";
import axios from "axios";
import styles from "./styles";
import config from "../../config";
import MapView, { Marker } from "react-native-maps";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

import TipsCard from "../../components/TipsCard";
import StepCard from "../../components/StepCard";

import geolib from "geolib";
import ActionButton from "react-native-action-button";

var getDateArray = function(start, end) {
  //Return  an array from start (date) to end (date)
  var arr = new Array();
  var dt = new Date(start);
  while (dt <= end) {
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }
  return arr;
};
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
    mounted: false,
    dateTipToAdd: undefined,
    dateArray: [],
    userId: undefined,
    travelBookUserId: undefined,
    latitude: 0,
    longitude: 0,
    markers: []
  };

  componentDidMount() {
    AsyncStorage.getItem("token", (err, token) => {
      if (!this.props.navigation.state.params) {
        return;
      }
      const { params } = this.props.navigation.state;

      axios
        .get(`${config.DOMAIN}travelbook/${params.id}`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          var startDate = new Date(response.data.start_date); //YYYY-MM-DD
          var endDate = new Date(response.data.end_date); //YYYY-MM-DD

          var dateArr = getDateArray(startDate, endDate);
          const markersList = [];
          for (let i = 0; i < response.data.steps.length; i++) {
            for (let j = 0; j < response.data.steps[i].tips.length; j++) {
              tip = response.data.steps[i].tips[j];
              markersList.push({
                title: tip.company_name ? tip.company_name : "no name",
                latitude: tip.loc ? tip.loc[1] : 10.494795,
                longitude: tip.loc ? tip.loc[0] : -85.494795,
                id: tip._id
              });
            }
          }
          this.setState({
            travelbook: response.data,
            steps: response.data.steps,
            travelBookUserId: response.data.user_id,
            dateArray: dateArr,
            latitude: response.data.loc ? response.data.loc[1] : 10.494795,
            longitude: response.data.loc ? response.data.loc[0] : -85.685515,
            markers: markersList
          });
          axios
            .get(`${config.DOMAIN}user`, {
              headers: {
                authorization: `Bearer ${token}`
              }
            })
            .then(response => {
              // console.log("User => ", response.data);
              this.setState({
                userId: response.data._id,
                mounted: true
              });
            })
            .catch(err => {
              console.log("get user id", err.message);
            });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  renderTips = tips => {
    if (this.state.mounted && tips && tips.length > 0) {
      return tips.map(tip => (
        <View key={tip._id}>
          <TipsCard id={tip._id} />
        </View>
      ));
    }
    return <Text>No tips in this step</Text>;
  };

  renderSteps = item => {
    //affiche les steps si un tips existe
    if (
      (this.state.mounted &&
        item["item"].tips &&
        item["item"].tips.length > 0) ||
      item["item"].show
    ) {
      return (
        <View>
          <View>
            <StepCard id={item["item"]._id} index={item["index"]} />
          </View>
          <View>{this.renderTips(item["item"].tips)}</View>
        </View>
      );
    }
    return <Text>No tips in this travelbook</Text>;
  };
  displayMarkers = () => {
    if (this.state.markers.length === 0)
      return (
        <Marker
          coordinate={{
            latitude: 10.260968,
            longitude: -85.584363
          }}
          title="Liberia Airport"
        />
      );
    else
      return this.state.markers.map((marker, i) => (
        <Marker
          key={i}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude
          }}
          title={marker.title}
        />
      ));
  };
  renderAddTipDate = () => {
    // console.log(
    //   "check button :",
    //   this.state.mounted,
    //   this.state.travelBookUserId,
    //   this.state.userId
    // );
    if (this.state.mounted && this.state.travelBookUserId === this.state.userId)
      return (
        <DatePicker
          style={{
            width: 200,
            marginBottom: 20
          }}
          showIcon={false}
          mode="date"
          placeholder="click here to add tip"
          format="YYYY-MM-DD"
          minDate={new Date(this.state.travelbook.start_date)}
          maxDate={new Date(this.state.travelbook.end_date)}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={datePickerCustomStyle}
          onDateChange={date => {
            let idxToAdd = this.state.dateArray
              .map(Number)
              .indexOf(Number(new Date(date)));

            let newSteps = [...this.state.steps];

            newSteps[idxToAdd].show = true;
            this.setState({ steps: newSteps }, console.log(newSteps));
            console.log("NEWSTEPS", newSteps[idxToAdd]);
            this.props.navigation.navigate("TipsForm", {
              stepId: newSteps[idxToAdd]._id,
              stepDate: newSteps[idxToAdd].start_date
            });
          }}
        />
      );
    else return null;
  };

  render() {
    const { travelbook, steps, mounted } = this.state;
    const date = new Date(travelbook.start_date);
    // console.log("POSITION GEOMETRY", this.state.latitude, this.state.longitude);
    // console.log("Marker List ", this.state.markers);
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
                      latitude: this.state.latitude,
                      longitude: this.state.longitude,
                      latitudeDelta: 0.515392,
                      longitudeDelta: 0.4937
                    }}
                    showsUserLocation={true}
                  >
                    {this.displayMarkers()}
                  </MapView>
                </View>
              </TouchableOpacity>
              <View>
                <Text style={{ marginBottom: 10 }}>
                  Description : {travelbook.description}
                </Text>
              </View>
              {this.renderAddTipDate()}

              <FlatList
                data={steps}
                keyExtractor={item => item._id}
                renderItem={item => {
                  return <View>{this.renderSteps(item)}</View>;
                }}
              />
            </View>
          </ScrollView>
          <ActionButton buttonColor="#37449E">
            <ActionButton.Item
              buttonColor="#1abc9c" //vert
              title="Add a Tip"
              onPress={() => this.renderAddTipDate()}
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
const datePickerCustomStyle = {
  dateIcon: {
    position: "absolute",
    left: 0,
    top: 4,
    marginLeft: 0
  },
  dateInput: {
    marginLeft: 36
  },
  placeholderText: {
    color: "grey"
  },
  dateText: {
    color: "black"
  }
};
