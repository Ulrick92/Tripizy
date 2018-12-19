import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  AsyncStorage
} from "react-native";
import styles from "./styles";
import axios from "axios";
import moment from "moment";
import config from "../../config";
import countries from "../SignupScreen/data/Countries";

export default class UserProfile extends React.Component {
  static navigationOptions = {
    title: "Profile",
    headerStyle: {
      backgroundColor: "#37449E",
      position: "relative",
      bottom: 200
    },
    headerTintColor: "#fff"
  };

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
          style={{
            width: 90,
            height: 90,
            borderRadius: 45,
            borderWidth: 4
          }}
          source={{ uri: this.state.picture[0] }}
        />
      );
    } else {
      return (
        <View>
          <Image
            style={{
              width: 90,
              height: 90,
              borderRadius: 45,
              borderWidth: 4
            }}
            source={require("../../assets/images/no_user.png")}
          />
        </View>
      );
    }
  };

  _onPressButton = () => {
    alert("coucou");
  };
  render() {
    return (
      <View style={styles.container}>
        <View>{this.renderPictureProfile()}</View>
        <View style={styles.donneeUser}>
          <Text>{this.state.first_name}</Text>
          <Text>{" " + this.state.last_name}</Text>
          <Text>{", " + this.state.userAge + " ans"}</Text>
          <Text>{", " + this.state.nationality}</Text>
        </View>
      </View>
    );
  }
  componentDidMount() {
    AsyncStorage.getItem("token", (err, token) => {
      axios
        .get(`${config.DOMAIN}user/`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          //  console.log("Responseponse", response.data); // pour voir si on recupère la data de la base
          //console.log("Birthday", response.data.birthday);
          console.log(response.data);

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
              // const birthDate = new Date(1991, 0, 31); // 31 Janvier 1991
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
    // }
  }
}
