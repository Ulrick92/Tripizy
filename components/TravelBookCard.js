import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import MapView, { Marker } from "react-native-maps";
const countries = require("../screens/SignupStepsScreen/AddressScreen/data/Countries.json");

export default class TravelBookCard extends React.Component {
  state = {
    countries: []
  };
  componentDidMount() {
    this.setState({ countries });
  }
  renderProfilePic(user_id) {
    if (user_id) {
      if (user_id.profile_pic.length) {
        return { uri: user_id.profile_pic[0] };
      } else {
        return require("../assets/images/no_user.png");
      }
    }
  }
  renderFlag(countries, user_id) {
    let flag = "";
    for (i = 0; i < countries.length; i++) {
      {
        if (user_id.nationality === countries[i].value) {
          flag = countries[i].flag;
          return (
            <Image
              style={{
                width: 13,
                height: 13,
                borderRadius: 13 / 2
              }}
              source={{ uri: flag }}
            />
          );
        }
      }
    }
  }
  render() {
    const {
      country,
      photos,
      start_date,
      end_date,
      title,
      user_id
    } = this.props;
    const { countries } = this.state;
    const dateFrom = new Date(start_date);
    const dateTo = new Date(end_date);
    console.log(user_id);
    if (this.state.countries.length) {
      return (
        <View style={styles.travelCard}>
          <ImageBackground
            source={{ uri: photos[0] }}
            style={styles.backgroundImage}
          >
            <TouchableOpacity
              onPress={() =>
                this.props.navigation("UserProfile", {
                  user: user_id._id
                })
              }
            >
              <ImageBackground
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  position: "absolute",
                  bottom: 155,
                  left: 10
                }}
                source={this.renderProfilePic(user_id)}
              >
                {this.renderFlag(countries, user_id)}
              </ImageBackground>
            </TouchableOpacity>
            <Text style={styles.textBackgroundImage}>{title}</Text>
            <Text style={styles.dateBackgroundImage}>
              {dateFrom.toDateString()} {" to "} {dateTo.toDateString()}
            </Text>
          </ImageBackground>

          {/* Bottom part Card */}
          {/* <View style={styles.bottomPart}>
            <View style={styles.userPart}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                source={require("../assets/images/userProfile.png")}
              />
              <Text>Ulrich L.</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: 5
                }}
              >
                <Image
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 15 / 2
                  }}
                  source={require("../assets/images/france.png")}
                />
                <Image
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 15 / 2
                  }}
                  source={require("../assets/images/star-icon.png")}
                />
              </View>
            </View>
  
            <View style={styles.userPart}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginBottom: 10
                }}
              >
                <Image
                  style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                  source={require("../assets/images/costaRica.png")}
                />
              </View>
              <Text style={{ fontSize: 10 }}>1 Country</Text>
            </View>
  
            <View style={styles.userPart}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginBottom: 10
                }}
              >
                <Image
                  style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                  source={require("../assets/images/solo-icon.png")}
                />
              </View>
              <Text style={{ fontSize: 10, textAlign: "center" }}>Solo</Text>
            </View>
  
            <View style={styles.userPart}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginBottom: 10
                }}
              >
                <Image
                  style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                  source={require("../assets/images/chilling-icon.png")}
                />
              </View>
              <Text style={{ fontSize: 10, textAlign: "center" }}>Ambiance</Text>
            </View>
  
            <MapView
              style={{ width: 100, height: 100 }}
              initialRegion={{
                latitude: 10.299167,
                longitude: -85.84,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
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
            </MapView> */}

          {/* <View style={styles.descriptionPart}>
              <Text numberOfLines={1}>Countries (2) : Costa Rica, Guatemala</Text>
              <Text numberOfLines={1} style={{ fontSize: 12 }}>
              Traveller spirit : Family
              </Text>
              <Text numberOfLines={1} style={{ fontSize: 12 }}>
              4 Traveller(s)
              </Text>
              <Text numberOfLines={3} style={{ fontSize: 12 }}>
              Description : Quam ob rem circumspecta cautela observatum est
              deinceps et cum edita montium petere coeperint grassatores, loci
              iniquitati milites cedunt. ubi autem in planitie potuerint
              reperiri, quod contingit adsidue, nec exsertare lacertos nec
              crispare permissi tela, quae vehunt bina vel terna, pecudum ritu
              inertium trucidantur.
              </Text>
            </View> */}
          {/* </View> */}
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
  travelCard: {
    flex: 1,
    margin: 10
  },
  backgroundImage: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
    shadowOpacity: 50
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
    fontSize: 12
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
    backgroundColor: "white",
    padding: 5,
    shadowOpacity: 50,
    width: 65,
    borderRadius: 5
  },
  descriptionPart: {
    // backgroundColor: "#A3BADC",
    paddingLeft: 10,
    width: 291
  }
});
