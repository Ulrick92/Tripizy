import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  AsyncStorage
} from "react-native";
import t from "tcomb-form-native";
import styles from "./styles";
import axios from "axios";
import moment from "moment";
import config from "../../config";
import countries from "../SignupScreen/data/Countries";
const Form = t.form.Form;

const bioForm = t.struct({
  bio: t.String
});

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
  componentDidMount() {
    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      // if (!token) {
      //   this.redirectToLoginPage();
      // } else {
      console.log("par ici");
      axios
        .get(`${config.DOMAIN}user/5c126661a70a320016dffec4`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          console.log("Response", res.data); // pour voir si on recupère la data de la base
          console.log("Birthday", res.data.birthday);
          this.setState(
            {
              first_name: res.data.first_name,
              last_name: res.data.last_name,
              nationality: res.data.nationality,
              birthday: res.data.birthday
            },
            () => {
              // const birthDate = new Date(1991, 0, 31); // 31 Janvier 1991
              const today = new Date();
              const userBirthday = this.state.birthday;
              console.log("this.state.birthday", this.state.birthday);
              const age = moment(today).diff(userBirthday, "years");
              console.log("âge de clement est : " + age + " ans");
              this.setState(
                {
                  userAge: age,
                  listCountries: countries
                },
                () => {
                  console.log(countries);
                  const countries = this.state.countries;
                  console.log(this.state.listCountries);
                  for (i = 0; i < this.state.listCountries.length; i++) {
                    {
                      if (
                        this.state.nationality ===
                        this.state.listCountries[i].value
                      ) {
                        this.setState({
                          nationality: this.state.listCountries[i].label
                        });
                        console.log("Nationality", this.state.nationality);
                      }
                      // console.log(this.state.listCountries[i].value);
                    }
                  }
                }
              );
              // this.state.userAge = age;
            }
          );
        })
        .catch(err => {
          console.log("Error", err);
        });
      // }
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      nationality: "",
      birthday: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.coverContainer}>
          <View style={styles.profileContainer} />
          {/* <View style={styles.profilePicture} /> */}
        </View>

        <View style={styles.buttonLeisure}>
          <Button onPress={this._onPressButton} title="About" />
          <Button onPress={this._onPressButton} title="Trips" />
          <Button onPress={this._onPressButton} title="Friends" />
          <Button onPress={this._onPressButton} title="Activity" />
        </View>
        <View style={styles.donneeUser}>
          <Text>{this.state.first_name}</Text>
          <Text>{" " + this.state.last_name}</Text>
          <Text>{", " + this.state.userAge + " ans"}</Text>
          <Text>{", " + this.state.nationality}</Text>
        </View>

        <Text style={styles.photos}>Photos</Text>

        <View style={styles.bioContainer}>
          <Form style={styles.bioNom} type={bioForm} />
        </View>

        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.buttonBIO}> EDIT PROFILE </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
