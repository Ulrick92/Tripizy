import React, { Component, Fragment } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  AsyncStorage
} from "react-native";
import TravelBookCard from "../../components/TravelBookCard";
import config from "../../config";
import axios from "axios";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import { SearchBar } from "react-native-elements";
import ActionButton from "react-native-action-button";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

export default class ListScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    travelbooks: [],
    currentUserToken: [],
    mounted: false,
    token: undefined,
    country: ""
  };
  onChangeSearchCountry = country => {
    this.setState({ country: country });
    console.log("country", country);
    axios
      .get(`${config.DOMAIN}travelbook/`, {
        params: {
          country: country
        },
        headers: {
          authorization: `Bearer ${this.state.token}`
        }
      })
      .then(response => {
        this.setState({
          travelbooks: response.data
        });
      })
      .catch(err => {
        console.log("Error", err.message);
      });
  };
  componentDidMount() {
    AsyncStorage.getItem("token", (err, token) => {
      axios
        .get(`${config.DOMAIN}travelbook/`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          this.setState({
            travelbooks: response.data,
            currentUserToken: token,
            mounted: true,
            token: token
          });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
  render() {
    const { currentUserToken, travelbooks } = this.state;
    // console.log("TOKEN => ", this.state.currentUserToken);
    return (
      <Fragment>
        <SearchBar
          onChangeText={this.onChangeSearchCountry}
          placeholder="Country"
          placeholderTextColor="#AAAAAA"
          clearIcon={{ color: "#AAAAAA" }}
          inputStyle={{ backgroundColor: "white" }}
        />
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
                      userId={item.user_id._id}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </ScrollView>

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
          <ActionButton.Item
            buttonColor="#9b59b6" //violet
            title="Search"
            onPress={() => this.props.navigation.navigate("", {})}
          >
            <MaterialIconsIcon name="search" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </Fragment>
    );
  }
}
