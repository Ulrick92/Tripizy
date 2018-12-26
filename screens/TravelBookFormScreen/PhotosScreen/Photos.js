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
  static navigationOptions = ({ navigation }) => ({
    title: "Travel Books",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  });

  // static navigationOptions = {
  //   title: "Create a Travel Book",
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
    photos: null // image en base64
  };

  redirectToLoginPage = () => {
    this.props.history.push("/log_in");
  };

  handleSubmit = event => {
    const { photos } = this.state;
    const {
      title,
      description,
      country,
      countries,
      start_date,
      end_date
    } = this.props.navigation.state.params;

    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      if (!token) {
        this.redirectToLoginPage();
      } else if (this.state.photos === null) {
        alert("A picture for your travelbook is required");
      } else {
        this.props.navigation.navigate("Category", {
          title: title,
          description: description,
          countries: countries,
          country: country,
          start_date: start_date,
          end_date: end_date,
          photos: photos
        });
        // console.log("photos", photos);
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
