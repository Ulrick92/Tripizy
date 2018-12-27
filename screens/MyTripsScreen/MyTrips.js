import React, { Component, Fragment } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  AsyncStorage
} from "react-native";
import axios from "axios";
import config from "../../config";
import TravelBookCard from "../../components/TravelBookCard";
import ActionButton from "react-native-action-button";
import styles from "./styles";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

const countries = require("../SignupStepsScreen/AddressScreen/data/Countries.json");

export default class MyTripsScreen extends Component {
  static navigationOptions = {
    header: null,
    title: "Travel Books",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  };

  state = {
    travelbooks: [],
    mounted: false,
    currentUserToken: [],
    countries: []
  };
  componentDidMount() {
    console.log("didmount");
    console.log(`${config.DOMAIN}travelbook/mytrips`);
    AsyncStorage.getItem("token", (err, token) => {
      axios
        .get(`${config.DOMAIN}travelbook/mytrips`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          // array of travelbooks of the current user
          console.log("response mytrips", response.data);
          this.setState({
            travelbooks: response.data,
            currentUserToken: token,
            mounted: true
          });
        });
    });
    this.setState({ countries });
  }
  render() {
    const { mounted, travelbooks, currentUserToken } = this.state;
    if (this.state.countries.length && mounted) {
      return (
        <Fragment>
          <ScrollView style={styles.container}>
            <View>
              <FlatList
                data={travelbooks}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      style={styles.itemContainer}
                      onPress={() =>
                        this.props.navigation.navigate("DetailsTravel", {
                          id: item._id
                        })
                      }
                    >
                      <TravelBookCard
                        {...item}
                        navigation={this.props.navigation}
                        currentUserToken={currentUserToken}
                      />
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </ScrollView>

          {/*  Button to create travelbook */}
          <ActionButton buttonColor="#37449E">
            <ActionButton.Item
              buttonColor="#1abc9c" //vert
              title="Create a new Travel Book"
              onPress={() =>
                this.props.navigation.navigate("TitleAndDescription", {
                  travelbooks: this.state.travelbooks
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
        <View style={styles.container}>
          <Text style={styles.loading}>Loading ...</Text>
        </View>
      );
    }
  }
}
