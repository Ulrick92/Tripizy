import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  AsyncStorage
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import StarRating from "react-native-star-rating";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";
import { Rating } from "react-native-elements";
import config from "../../config";
import Moment from "moment";

export default class TipsPage extends React.Component {
  state = {
    travelbook: {},
    steps: [],
    tip: {},
    user: {},
    mounted: false,
    userId: undefined,
    travelBookUserId: undefined
  };

  componentDidMount() {
    AsyncStorage.getItem("token", (err, token) => {
      if (!this.props.navigation.state.params) {
        return;
      }
      const { params } = this.props.navigation.state;

      axios
        .get(`${config.DOMAIN}tips/${params.id}`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          this.setState({
            tip: response.data
          });
          console.log("TIPS DATA :", response.data);

          axios
            .get(`${config.DOMAIN}user/`, {
              headers: {
                authorization: `Bearer ${token}`
              }
            })
            .then(response => {
              console.log("USER DATA => ", response.data);
              this.setState({
                user: response.data,
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

  renderProfilePage(user_id) {
    if (user_id) {
      if (user_id.token !== this.props.currentUserToken) {
        console.log("userID transmis :", this.props.userId);
        this.props.navigation.navigate("UserProfile", {
          user: this.props.userId
        });
      } else {
        this.props.navigation.navigate("MyProfile");
      }
    }
  }

  renderTipsPictures = () => {
    if (this.state.mounted && this.state.tip.photos.length > 0) {
      return (
        <Image
          style={styles.pictures}
          source={{ uri: this.state.tip.photos[0] }}
        />
      );
    } else {
      return (
        <View>
          <Image
            style={styles.pictures}
            source={require("../../assets/images/Travel_book.png")}
          />
        </View>
      );
    }
  };

  renderTipsRating = () => {
    if (this.state.mounted && this.state.tip.rate.length > 0) {
      const rating = Number(this.state.tip.rate[0]);
      return (
        <Rating
          ratingBackgroundColor="#a9ceca"
          imageSize={18}
          type="heart"
          readonly
          startingValue={rating}
        />
      );
    } else {
      return null;
    }
  };

  renderTipsLocation = () => {
    if (this.state.mounted && this.state.tip.loc.length > 0) {
      const tipLat = Number(this.state.tip.loc[0]);
      const tipLon = Number(this.state.tip.loc[1]);
      return (
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: tipLat,
            longitude: tipLon,
            latitudeDelta: 40,
            longitudeDelta: 40
          }}
          showsUserLocation={true}
        >
          <Marker
            coordinate={{
              latitude: tipLat,
              longitude: tipLon
            }}
            title={this.state.tip.company_name}
            description={this.state.tip.category}
          />
        </MapView>
      );
    } else {
      return null;
    }
  };

  renderTipStartDate = () => {
    Moment.locale("en");
    var fromDate = this.state.tip.start_date;
    return <Text> {Moment(fromDate).format("Do MMMM YYYY")} </Text>;
  };

  renderTipEndDate = () => {
    Moment.locale("en");
    var endDate = this.state.tip.end_date;
    return <Text> {Moment(endDate).format("Do MMMM YYYY")} </Text>;
  };

  renderTipNights = () => {
    var startDate = Moment(this.state.tip.start_date).format("YYYYMMDD");
    var endDate = Moment(this.state.tip.end_date).format("YYYYMMDD");
    var dateFrom = Moment(startDate, "YYYYMMDD");
    var dateTo = Moment(endDate, "YYYYMMDD");
    return <Text>{dateTo.diff(dateFrom, "days")}</Text>;
  };

  render() {
    return (
      <ScrollView style={{ margin: 10 }}>
        <View style={styles.tipsCard}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.imageProfile}
              source={require("../../assets/images/no_user.png")}
            />
          </View>

          <View style={styles.donneeName}>
            <Text style={styles.textName}>{this.state.user.first_name} </Text>
            <Text style={styles.textName}>{this.state.user.last_name}</Text>
          </View>
          <View style={styles.donneeAgeCountry}>
            <Text style={styles.textAgeCountry}>34 ans, </Text>
            <Text style={styles.textAgeCountry}>French</Text>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#EAE1E2",
                marginBottom: 5,
                borderRadius: 10
              }}
            >
              <View style={{ alignItems: "center", marginLeft: 5 }}>
                <FontAwesomeIcon name="hotel" size={40} color="black" />
                <Text style={{ fontFamily: "Arial", fontSize: 12 }}>
                  {this.state.tip.category}
                </Text>
              </View>
              <View
                style={{
                  marginleft: 5,
                  justifyContent: "center",
                  width: "56%"
                }}
              >
                <Text
                  style={{ fontSize: 18, marginLeft: 12, fontWeight: "bold" }}
                >
                  {this.state.tip.company_name}
                </Text>
                <Text style={{ fontSize: 14, marginLeft: 12 }}>
                  {this.state.tip.city}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "center"
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 5,
                    marginTop: 5
                  }}
                >
                  {this.renderTipsRating()}
                </View>
                <View
                  style={{
                    flexDirection: "row"
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16
                    }}
                  >
                    {this.state.tip.price}$
                  </Text>
                  <Text> / night</Text>
                </View>
                <Text />
              </View>
            </View>

            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 5,
                borderColor: "grey",
                marginBottom: 5
              }}
            >
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold" }}>From: </Text>
                  {this.renderTipStartDate()}
                </View>
                <View style={{ flexDirection: "row", marginLeft: 20 }}>
                  <Text style={{ fontWeight: "bold" }}>To: </Text>
                  {this.renderTipEndDate()}
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Night(s): </Text>
                {this.renderTipNights()}
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Travelling mode : </Text>
                <Text>Family</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Adress : </Text>
                <Text>{this.state.tip.adress}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Contact : </Text>
                <Text>{this.state.tip.contact}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Link : </Text>
                <Text>{this.state.tip.web_site}</Text>
              </View>
            </View>

            <View>{this.renderTipsLocation()}</View>
            <Text style={{ marginBottom: 10 }}>
              {this.state.tip.description}
            </Text>
            <View style={{ flexDirection: "row" }}>
              {this.renderTipsPictures()}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  tipsPage: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10
  },
  pictures: {
    width: 100,
    height: 100,
    justifyContent: "flex-end",
    shadowOpacity: 50,
    borderRadius: 10,
    marginRight: 5
  },
  mapView: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    shadowOpacity: 50
  },
  imageProfile: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderWidth: 1,
    borderColor: "white"
  },
  donneeName: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 10,
    alignItems: "center"
  },
  donneeAgeCountry: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5
  },
  textName: {
    fontSize: 14,
    fontWeight: "bold"
  },
  textAgeCountry: {
    color: "grey"
  }
});
