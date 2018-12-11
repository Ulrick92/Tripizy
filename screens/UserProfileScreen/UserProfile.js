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

const Form = t.form.Form;

const bioForm = t.struct({
  bio: t.String
});

export default class UserProfile extends React.Component {
  componentDidMount() {
    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      // if (!token) {
      //   this.redirectToLoginPage();
      // } else {
      console.log("par ici");
      axios
        .get("http://localhost:3000/user/5c0e9483ab7c2f1876558be2", {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          console.log("6ix9ine", res.data.first_name);
          console.log("6ix9ine", res.data.last_name);
          this.setState({
            first_name: res.data.first_name,
            last_name: res.data.last_name
          });
          // const userComponents = [];
          // for (let i = 0; i < this.state.data.length; i++) {
          //   userComponents.push(
          //     this.state.data.first_name,
          //     this.state.data.last_name
          //   );

          // this.setState({ data: res.data });
          // // this.setState({first})
          // console.log("pharon est là", res.data);
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
      last_name: ""
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
          <Text>{this.state.last_name}</Text>
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
