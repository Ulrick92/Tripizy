import React from "react";
import {
  StyleSheet,
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

const Form = t.form.Form;

const bioForm = t.struct({
  bio: t.String
});

// static navigationOptions = {
//   title: "Profile",
//   headerStyle: {
//     backgroundColor: "#37449E"
//   },
//   headerTintColor: "#fff"
// };
export default class UserProfile extends React.Component {
  componentDidMount() {
    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      // if (!token) {
      //   this.redirectToLoginPage();
      // } else {
      console.log("par ici");
      axios
        .get(
          "https://back-tripizy.herokuapp.com/user/5c126661a70a320016dffec4",
          {
            headers: {
              authorization: `Bearer ${token}`
            }
          }
        )
        .then(res => {
          console.log("6ix9ine", res.data); // pour voir si on recupère la data de la base
          console.log("6ix9ine", res.data.birthday);
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
              // console.log("bhd", bhd);
              const age = moment(today).diff(userBirthday, "years"); // 27
              console.log("âge de clement est : " + age + " ans");
              this.setState({
                userAge: age
              });
              this.state.userAge = age;
            }
          );
        })
        .catch(err => {
          console.log("salah salah salah", err);
        });
      // }
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      nationality: String,
      birthday: Number
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
          <Text>{" " + this.state.nationality}</Text>
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
