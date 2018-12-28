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
    travelBookUserId: undefined
  };
  componentDidMount() {
    AsyncStorage.getItem("token", (err, token) => {
      if (!this.props.navigation.state.params) {
        console.log("hello");
        return;
      }
      const { params } = this.props.navigation.state;

      console.log("detailstravelbookparams", this.props);
      console.log("Params =>", params);

      axios
        .get(`${config.DOMAIN}travelbook/${params.id}`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          console.log("Response detailtravelbook =>", response.data);
          var startDate = new Date(response.data.start_date); //YYYY-MM-DD
          var endDate = new Date(response.data.end_date); //YYYY-MM-DD

          var dateArr = getDateArray(startDate, endDate);
          this.setState({
            travelbook: response.data,
            steps: response.data.steps,
            travelBookUserId: response.data.user_id,
            dateArray: dateArr
          });
          axios
            .get(`${config.DOMAIN}user`, {
              headers: {
                authorization: `Bearer ${token}`
              }
            })
            .then(response => {
              console.log("User => ", response.data);
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
    console.log("this tips", tips);
    if (this.state.mounted && tips && tips.length > 0) {
      return tips.map(tip => (
        <View key={tip}>
          <TipsCard id={tip} />
        </View>
      ));
    }
    return <Text>No tips in this travelbook</Text>;
  };

  renderSteps = item => {
    console.log("ITEM", item);
    console.log(item["show"]);
    console.log(
      (this.state.mounted &&
        item["item"].tips &&
        item["item"].tips.length > 0) ||
        item["item"].show
    );
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
    return null;
  };
  renderAddTipDate = () => {
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

            let newSteps = [...steps];

            newSteps[idxToAdd].show = true;
            this.setState({ steps: newSteps }, console.log(newSteps));
            console.log("NEWSTEPS", newSteps[idxToAdd]._id);
            this.props.navigation.navigate("TipsForm", {
              stepId: newSteps[idxToAdd]._id
            });
          }}
        />
      );
    else return null;
  };
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
