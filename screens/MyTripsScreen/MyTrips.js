import React, { Component, Fragment } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Platform,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  AsyncStorage
} from "react-native";
import axios from "axios";
import config from "../../config";
import TravelBookCard from "../../components/TravelBookCard";
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
          console.log("response", response.data);
          this.setState({
            travelbooks: response.data,
            mounted: true
          });
        });
    });
    this.setState({ countries });
  }
  render() {
    // on vérifie que le this.state existe
    const { mounted, travelbooks } = this.state;
    if (this.state.countries.length && mounted) {
      console.log("render  : ", this.state.travelbooks.length);
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
                      <TravelBookCard {...item} />
                    </TouchableOpacity>
                  );
                }}
              />
              {/* <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("DetailsTravel");
                }}
              >
                <TravelBookCard />
              </TouchableOpacity> */}
            </View>
            {/* <TravelBookCard /> */}
          </ScrollView>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              title="Go to Create a Travel Book"
              onPress={() =>
                this.props.navigation.navigate("TitleAndDescription", {
                  travelbooks: this.state.travelbooks
                })
              }
            >
              +
            </Text>
          </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE1E2"
  },
  loading: {
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    borderColor: "rgba(0,0,0,0.2)",
    width: 50,
    height: 50,
    backgroundColor: "#0040cc",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    right: 10
  },
  buttonText: {
    color: "white",
    fontSize: 30
  }
});
