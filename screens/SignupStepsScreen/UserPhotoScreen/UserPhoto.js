import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  Image
} from "react-native";
import { ImagePicker, Permissions } from "expo";
import styles from "./styles";

export default class Photos extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Travel Books",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  });

  // static navigationOptions = {
  //   title: "Sign Up",
  //   headerTintColor: "white",
  //   headerStyle: {
  //     backgroundColor: "#002982"
  //   },
  //   headerTitleStyle: {
  //     fontSize: 20,
  //     color: "white",
  //     fontWeight: "200"
  //   }
  // };

  state = {
    profile_pic: null // image en base64
  };

  handleSubmit = event => {
    const { profile_pic } = this.state;
    const {
      first_name,
      last_name,
      birthday,
      email,
      password,
      confirmPassword
    } = this.props.navigation.state.params;

    if (profile_pic) {
      this.props.navigation.navigate("Address", {
        first_name: first_name,
        last_name: last_name,
        birthday: birthday,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        profile_pic: profile_pic
      });
      console.log("profile_pic", profile_pic);
    }
  };

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    // you would probably do something to verify that permissions
    // are actually granted, but I'm skipping that for brevity
  };

  useLibraryHandler = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });
    this.setState({ profile_pic: "data:image/jpeg;base64," + result.base64 });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>Profile Picture</Text>

        <Button
          title="Pick an image from camera roll"
          onPress={this.useLibraryHandler}
        />
        {this.state.profile_pic && (
          <Image
            source={{ uri: this.state.profile_pic }}
            style={{ width: 200, height: 200 }}
          />
        )}

        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
