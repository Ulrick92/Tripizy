import React, { Component } from "react";
import {
  Text,
  KeyboardAvoidingView,
  AsyncStorage,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import { Fumi, Kohana } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialsIcon from "react-native-vector-icons/MaterialIcons";
import { FormLabel, FormInput, Rating } from "react-native-elements";
import { ImagePicker, Permissions } from "expo";
import config from "../../config";

export default class RoadForm extends Component {
  static navigationOptions = {
    title: "Transport",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  };

  state = {
    step_id: "5c139ed9fbbb0b0016afa716",
    category: "Transport",
    company_name: "",
    city: "",
    start_date: "",
    end_date: ""
  };

  redirectToLoginPage = () => {
    this.props.navigation.navigate("Login");
  };

  handleSubmit = event => {
    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      const {
        step_id,
        category,
        company_name,
        city,
        start_date,
        end_date
      } = this.state;
      console.log("result :", this.state);

      if (!token) {
        this.redirectToLoginPage();
      } else {
        axios
          .post(
            `${config.DOMAIN}tips/publish`,
            {
              step_id: step_id,
              category: category,
              company_name: this.state.company_name,
              city: this.state.city,
              start_date: this.state.start_date,
              end_date: this.state.end_date
            },
            {
              headers: {
                authorization: `Bearer ${token}`
              }
            }
          )

          .then(response => {
            console.log("response :", response.data);

            this.props.navigation.navigate("DetailsTravel", {
              category: response.data.category,
              company_name: response.data.company_name,
              city: response.data.city,
              start_date: response.data.start_date,
              end_date: response.data.end_date
            });
          })
          .catch(error => {
            console.log("Nom de l'erreur : ", error);
          });
      }
    });
  };
  ratingCompleted(rating) {
    console.log("Rating is: " + rating);
  }

  useLibraryHandler = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });
    this.setState(
      { photos: "data:image/jpeg;base64," + result.base64 },
      () => {}
    );
  };

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#a9ceca" }}>
        <KeyboardAvoidingView behavior="padding">
          <View style={[styles.card2, { backgroundColor: "#a9ceca" }]}>
            {/* <Text style={styles.title}>Fumi</Text> */}
            <Fumi
              label={"Hotel Name :"}
              iconClass={FontAwesomeIcon}
              iconName={"hotel"}
              iconColor={"#f95a25"}
              iconSize={20}
            />
            <Fumi
              label={"City :"}
              iconClass={MaterialsIcon}
              iconName={"place"}
              iconColor={"#f95a25"}
              iconSize={20}
            />
            <Fumi
              label={"Adress :"}
              iconClass={MaterialsIcon}
              iconName={"place"}
              iconColor={"#f95a25"}
              iconSize={20}
            />
            <Fumi
              label={"From :"}
              iconClass={FontAwesomeIcon}
              iconName={"calendar"}
              iconColor={"#f95a25"}
              iconSize={20}
            />
            <Fumi
              label={"To :"}
              iconClass={FontAwesomeIcon}
              iconName={"calendar"}
              iconColor={"#f95a25"}
              iconSize={20}
            />
            <Fumi
              label={"Price / night (€) :"}
              iconClass={FontAwesomeIcon}
              iconName={"money"}
              iconColor={"#f95a25"}
              iconSize={20}
            />
            <Fumi
              label={"Website link :"}
              iconClass={FontAwesomeIcon}
              iconName={"link"}
              iconColor={"#f95a25"}
              iconSize={20}
            />
            <Fumi
              label={"Phone Number :"}
              iconClass={FontAwesomeIcon}
              iconName={"phone"}
              iconColor={"#f95a25"}
              iconSize={20}
            />
            <View style={{ marginTop: 5, backgroundColor: "white" }}>
              <View style={{ flexDirection: "row" }}>
                <FormLabel>Rating :</FormLabel>
                <Rating
                  //   showRating
                  startingValue={0}
                  type="heart"
                  onFinishRating={this.ratingCompleted}
                  imageSize={35}
                  style={{
                    paddingVertical: 10,
                    backgroundColor: "white",
                    alignItems: "center"
                  }}
                />
              </View>
              <FormLabel>Describe your experience :</FormLabel>
              {/* <FormInput
                onChangeText={text => this.setState({ company_name: text })}
              /> */}
              <TextInput
                style={styles.descriptionInput}
                multiline={true}
                autoCapitalize="none"
                maxLength={500}
                value={this.state.company_name}
                placeholder={"Tell us everything about your experience! ;)"}
                onChangeText={text => this.setState({ company_name: text })}
              />
            </View>
            <View style={{ marginTop: 5, alignItems: "center" }}>
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
            </View>
            <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
              <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    // marginTop: 4
    height: 40,
    alignContent: "center"
  },
  card2: {
    padding: 16
  },
  title: {
    paddingBottom: 16,
    textAlign: "center",
    color: "#404d5b",
    fontSize: 20,
    fontWeight: "bold",
    opacity: 0.8
  },
  descriptionInput: {
    // height: 300,
    fontSize: 18,
    marginLeft: 12,
    marginRight: 12,
    top: 10,
    marginBottom: 20
    // padding: 5,
    // color: "#37449E",
    // borderColor: "white",
    // borderBottomWidth: 1,
    // alignItems: "center"
    // backgroundColor: "white"
  },
  button: {
    marginTop: 20,
    backgroundColor: "#37449E",
    height: 50,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderRadius: 10
  }
});
