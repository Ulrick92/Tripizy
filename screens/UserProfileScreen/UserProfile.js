import React from "react";
import { View, Text, Image, AsyncStorage, ScrollView } from "react-native";
import styles from "./styles";
import axios from "axios";
import moment from "moment";
import config from "../../config";
import countries from "../SignupScreen/data/Countries";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";

export default class UserProfile extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "User Profile",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  });

  constructor(props) {
    super(props);
    this.state = {
      first_name: undefined,
      last_name: undefined,
      nationality: undefined,
      birthday: undefined,
      age: undefined,
      city: undefined,
      picture: []
    };
  }
  renderPictureProfile = () => {
    if (this.state.picture.length > 0) {
      return (
        <Image
          style={styles.imageProfile}
          source={{ uri: this.state.picture[0] }}
        />
      );
    } else {
      return (
        <View>
          <Image
            style={styles.imageProfile}
            source={require("../../assets/images/no_user.png")}
          />
        </View>
      );
    }
  };

  render() {
    // const { params } = this.props.navigation.state;
    // console.log("Params =>", params.user);

    return (
      <ScrollView>
        <View style={styles.coverContainer}>
          <Image
            style={styles.coverPicture}
            source={require("../../assets/images/beachCover.png")}
          />
          <View>{this.renderPictureProfile()}</View>
          <View>
            <View style={styles.donneeName}>
              <Text style={styles.textName}>{this.state.first_name}</Text>
              <Text style={styles.textName}>{" " + this.state.last_name}</Text>
            </View>
            <View style={styles.donneeAgeCountry}>
              <Text style={styles.textAgeCountry}>
                {this.state.userAge + " ans"}
              </Text>
              <Text style={styles.textAgeCountry}>
                {", " + this.state.nationality}
              </Text>
            </View>
          </View>

          <View style={styles.category}>
            <View style={{ alignItems: "center" }}>
              <FontAwesomeIcon
                name="map"
                size={50}
                color="#37449E"
                onPress={() => this.props.navigation.navigate("HotelForm")}
              />
              <Text style={{ fontFamily: "Arial", fontSize: 12 }}>My Map</Text>
            </View>

            <View style={{ alignItems: "center" }}>
              <EntypoIcon name="book" size={45} color="#37449E" />
              <Text style={{ fontFamily: "Arial", fontSize: 12 }}>
                My Trips
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <FontAwesomeIcon name="star-o" size={50} color="#37449E" />
              <Text style={{ fontFamily: "Arial", fontSize: 12 }}>My Tips</Text>
            </View>
          </View>

          <View style={styles.category}>
            <View style={{ alignItems: "center" }}>
              <SimpleLineIcon name="badge" size={50} color="#37449E" />
              <Text style={{ fontFamily: "Arial", fontSize: 12 }}>Badge</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <MaterialIconsIcon name="message" size={50} color="#37449E" />
              <Text style={{ fontFamily: "Arial", fontSize: 12 }}>Chat</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <EntypoIcon
                name="users"
                size={50}
                color="#37449E"
                onPress={() => this.props.navigation.navigate("RestaurantForm")}
              />
              <Text style={{ fontFamily: "Arial", fontSize: 12 }}>Friends</Text>
            </View>
          </View>

          <View style={styles.category}>
            <View style={{ alignItems: "center" }}>
              <FontAwesomeIcon name="photo" size={50} color="#37449E" />
              <Text style={{ fontFamily: "Arial", fontSize: 12 }}>Pics</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <EntypoIcon
                name="line-graph"
                size={50}
                color="#37449E" //indigo FB
                onPress={() => this.props.navigation.navigate("RestaurantForm")}
              />
              <Text style={{ fontFamily: "Arial", fontSize: 12 }}>Stats</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <FontAwesomeIcon name="print" size={50} color="#37449E" />
              <Text style={{ fontFamily: "Arial", fontSize: 12 }}>Print</Text>
            </View>
          </View>

          <View />
        </View>
      </ScrollView>
    );
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    console.log("Params =>", params.user);
    // console.log("User ID =>", param);
    AsyncStorage.getItem("token", (err, token) => {
      axios
        .get(`${config.DOMAIN}user/${params.user}`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          console.log("response axios :", response.data);

          this.setState(
            {
              first_name: response.data.first_name,
              last_name: response.data.last_name,
              nationality: response.data.nationality,
              birthday: response.data.birthday,
              city: response.data.city,
              picture: response.data.profile_pic,
              listCountries: countries
            },
            () => {
              const today = new Date();
              const userBirthday = new Date(response.data.birthday);

              console.log("userBirday ", userBirthday);

              const age = moment(today).diff(userBirthday, "years");
              console.log("age", age);

              for (i = 0; i < this.state.listCountries.length; i++) {
                {
                  if (
                    this.state.nationality === this.state.listCountries[i].value
                  ) {
                    this.setState({
                      nationality: this.state.listCountries[i].label,
                      userAge: age
                    });
                  }
                }
              }
            }
          );
        });
    }).catch(err => {
      console.log("Error", err);
    });
  }
}
