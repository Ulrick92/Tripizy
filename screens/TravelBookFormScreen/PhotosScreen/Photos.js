import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  AsyncStorage,
  Image
} from "react-native";
import { ImagePicker, Permissions } from "expo";
import styles from "./styles";

export default class Photos extends Component {
  static navigationOptions = {
    title: "Create a Travel Book",
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
    photos: null // image en base64
  };

  redirectToLoginPage = () => {
    this.props.history.push("/log_in");
  };

  handleSubmit = event => {
    const { photos } = this.state;

    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      if (!token) {
        this.redirectToLoginPage();
      } else {
        this.props.navigation.navigate("Category", {
          title: this.props.navigation.state.params.title,
          description: this.props.navigation.state.params.description,
          countries: this.props.navigation.state.params.countries,
          country: this.props.navigation.state.params.country,
          start_date: this.props.navigation.state.params.start_date,
          end_date: this.props.navigation.state.params.end_date,
          photos: this.state.photos
        });
        //        console.log(this.state.photos);
      }
    });
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
    console.log("Object.keys(result)");

    console.log(Object.keys(result));
    this.setState({ photos: "data:image/jpeg;base64," + result.base64 }, () => {
      console.log(result);
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>Photos</Text>
        <Text style={styles.hint}>Do you want to add a cover picture ?</Text>

        <Button
          title="Pick an image from camera roll"
          onPress={this.useLibraryHandler}
        />
        {this.state.photos && (
          <Image
            source={{ uri: this.state.photos }}
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
