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
  static navigationOptions = {
    title: "Sign Up",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#002982"
    },
    headerTitleStyle: {
      fontSize: 20,
      color: "white",
      fontWeight: "200"
    }
  };

  state = {
    profile_pic: null // image en base64
  };

  handleSubmit = event => {
    const { profile_pic } = this.state;

    if (profile_pic) {
      this.props.navigation.navigate("Address", {
        first_name: this.props.navigation.state.params.first_name,
        last_name: this.props.navigation.state.params.last_name,
        birthday: this.props.navigation.state.params.birthday,
        email: this.props.navigation.state.params.email,
        password: this.props.navigation.state.params.password,
        confirmPassword: this.props.navigation.state.params.confirmPassword,
        profile_pic: this.state.profile_pic
      });
      console.log(this.state.profile_pic);
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
