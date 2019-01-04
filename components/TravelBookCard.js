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
      if (user_id.profile_pic && user_id.profile_pic.length) {
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
                width: 14,
                height: 14,
                borderRadius: 14 / 2
              }}
              source={{ uri: flag }}
            />
          );
        }
      }
    }
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

    const millisecondsPerDay = 1000 * 60 * 60 * 24;

    function dateDifferenceInDays(dateFrom, dateTo) {
      const utcDateFrom = Date.UTC(
        dateFrom.getFullYear(),
        dateFrom.getMonth(),
        dateFrom.getDate()
      );
      const utcDateTo = Date.UTC(
        dateTo.getFullYear(),
        dateTo.getMonth(),
        dateTo.getDate()
      );

      return Math.floor((utcDateTo - utcDateFrom) / millisecondsPerDay);
    }

    const dateFrom = new Date(start_date);
    const dateTo = new Date(end_date);
    const duration = dateDifferenceInDays(dateFrom, dateTo);

    const monthFrom = dateFrom.getUTCMonth();
    const yearFrom = dateFrom.getUTCFullYear();

    const monthsInLetters = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    if (this.state.countries.length) {
      return (
        <View style={styles.travelCard}>
          <ImageBackground
            source={{ uri: photos[0] }}
            style={styles.backgroundImage}
            imageStyle={{ borderRadius: 5 }}
          >
            <TouchableOpacity onPress={() => this.renderProfilePage(user_id)}>
              <ImageBackground
                style={{
                  width: 43,
                  height: 43,
                  position: "absolute",
                  bottom: 152,
                  left: 10
                }}
                imageStyle={{
                  borderRadius: 43 / 2,
                  borderWidth: 1,
                  borderColor: "white",
                  shadowOpacity: 20
                }}
                source={this.renderProfilePic(user_id)}
              >
                {this.renderFlag(countries, user_id)}
              </ImageBackground>
            </TouchableOpacity>
            <Text style={styles.textBackgroundImage}>{title}</Text>
            <Text style={styles.dateBackgroundImage}>
              {monthsInLetters[monthFrom]} {yearFrom} {" - "} {duration}{" "}
              {duration === 1 ? " day" : " days"}
            </Text>
          </ImageBackground>
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
    margin: 8
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
