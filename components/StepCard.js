import React, { Component, Fragment } from "react";
import { withNavigation } from "react-navigation";
import axios from "axios";
import {
  TouchableOpacity,
  View,
  Text,
  AsyncStorage,
  StyleSheet
} from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import config from "../config";
import Moment from "moment";

class StepCard extends React.Component {
  state = {
    step: {},
    tips: [],
    mounted: false,
    travelBookUserId: undefined,
    userId: undefined
  };

  componentDidMount() {
    AsyncStorage.getItem("token", (err, token) => {
      axios
        .get(`${config.DOMAIN}step/${this.props.id}`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          console.log("StepState => ", response.data);
          this.setState({
            step: response.data,
            tips: response.data.tips,
            travelBookUserId: response.data.travelbook_id.user_id
          });
          axios
            .get(`${config.DOMAIN}user`, {
              headers: {
                authorization: `Bearer ${token}`
              }
            })
            .then(response => {
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
          console.log("get step", err.message);
        });
    });
  }

  renderAddTipsButton = () => {
    // hide "+ tip" button if user is not the owner of travelbook
    if (this.state.mounted && this.state.travelBookUserId === this.state.userId)
      return (
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("TipsForm", {
              stepId: this.state.step._id,
              stepDate: this.state.step.start_date
            });
          }}
        >
          <View style={{ justifyContent: "center", marginEnd: 10 }}>
            <MaterialIconsIcon name="add-circle" />
            <Text>Add tip</Text>
          </View>
        </TouchableOpacity>
      );
    else return null;
  };

  renderTipStartDate = () => {
    Moment.locale("en");
    var fromDate = this.state.step.start_date;
    return <Text> {Moment(fromDate).format("dddd Do MMMM YYYY")} </Text>;
  };

  render() {
    const { mounted, step } = this.state;
    const { index } = this.props;
    const date = new Date(step.start_date);

    if (mounted) {
      return (
        <View style={styles.containerStep}>
          <View style={styles.containerDay}>
            <Text style={styles.textDay}>Day {index + 1}</Text>
          </View>
          <Text style={styles.textDate}>{this.renderTipStartDate()}</Text>
          {this.renderAddTipsButton()}
        </View>
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
  containerStep: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    height: 30,
    backgroundColor: "#D9ECF2",
    borderRadius: 5
  },
  containerDay: {
    backgroundColor: "#37449E",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  textDay: {
    fontWeight: "bold",
    fontSize: 17,
    color: "white",
    padding: 3
  },
  textDate: { marginLeft: 5, color: "#37449E", padding: 3, fontSize: 14 }
});

export default withNavigation(StepCard);
