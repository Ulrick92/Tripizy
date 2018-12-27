import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage,
  View,
  Button,
  Image,
  ScrollView
} from "react-native";
import config from "../../config";
import { withNavigation } from "react-navigation";
import axios from "axios";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import StarRating from "react-native-star-rating";
import { ImagePicker, Permissions } from "expo";
import styles from "./styles";

class HotelForm extends Component {
  state = {
    stepId: "5c1d16a625194d001618f274",
    category: "Hotel",
    company_name: "Casa del Papel",
    city: "Vinales",
    start_date: "03/03/2015",
    end_date: "03/03/2015",
    photos: null,
    price: undefined,
    currency: "USD"
  };

  redirectToLoginPage = () => {
    this.props.navigation.navigate("Login");
  };

  handleSubmit = event => {
    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      const {
        stepId,
        category,
        company_name,
        city,
        start_date,
        end_date,
        photos
      } = this.state;
      console.log("result :", this.state);

      if (!token) {
        this.redirectToLoginPage();
      } else {
        console.log("COUCOUCOUCOUCOUCU", {
          step_id: stepId,
          category: category,
          company_name: this.state.company_name,
          city: this.state.city,
          start_date: this.state.start_date,
          end_date: this.state.end_date,
          photos: photos
        });
        axios
          .post(
            `${config.DOMAIN}tips/publish`,
            {
              step_id: stepId,
              category: category,
              company_name: this.state.company_name,
              city: this.state.city,
              start_date: this.state.start_date,
              end_date: this.state.end_date,
              files: [photos]
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
              end_date: response.data.end_date,
              photos: response.data.photos
            });
          })
          .catch(error => {
            console.log("Nom de l'erreur : ", error);
          });
      }
    });
  };

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  };

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

  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Text style={styles.hint}>
            <FontAwesomeIcon name="hotel" size={50} color="black" />
          </Text>
          <View style={styles.containerForm}>
            {/* Input City */}
            <View style={styles.inputLine}>
              <Text style={{ fontSize: 18 }}>Hotel Name :</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={this.state.company_name}
                placeholder={"ex : Hotel California"}
                onChangeText={text => this.setState({ company_name: text })}
              />
            </View>
            {/* Input Adress */}
            <View style={styles.inputLine}>
              <Text style={{ fontSize: 18 }}>City :</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={this.state.city}
                placeholder={"ex : Ouagadougou"}
                onChangeText={text => this.setState({ city: text })}
              />
            </View>
            <View style={styles.inputLine}>
              <Text style={{ fontSize: 18 }}>Adress :</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={this.state.adress}
                placeholder={"ex : 55 blvd Paul Smith"}
                onChangeText={text => this.setState({ adress: text })}
              />
            </View>
            <View style={styles.inputLine}>
              <Text style={{ fontSize: 18 }}>Website link :</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={this.state.website}
                placeholder={"ex : www.tripizy.app"}
                onChangeText={text => this.setState({ website: text })}
              />
            </View>
            <View style={styles.inputLine}>
              <Text style={{ fontSize: 18 }}>From :</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={this.state.start_date}
                placeholder={"22/08/2018"}
                onChangeText={value => this.setState({ start_date: value })}
              />
            </View>
            <View style={styles.inputLine}>
              <Text style={{ fontSize: 18 }}>to :</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={this.state.end_date}
                placeholder={"23/08/2018"}
                onChangeText={value => this.setState({ end_date: value })}
              />
            </View>
            <View style={styles.inputLine}>
              <Text style={{ fontSize: 18 }}>Price per night :</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={this.state.price}
                placeholder={"ex: 50"}
                onChangeText={text => this.setState({ price: text })}
              />
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={this.state.currency}
                placeholder={"USD"}
                onChangeText={text => this.setState({ currency: text })}
              />
            </View>
            <View style={styles.inputLine}>
              <Text style={{ fontSize: 18 }}>Rating :</Text>
              <View style={{ flexDirection: "row" }}>
                <StarRating
                  style={{ backgroundColor: "blue", justifyContent: "center" }}
                  fullStarColor={"#ffc200"}
                  emptyStarColor={"#c9c3c3"}
                  starSize={30}
                  disabled={false}
                  maxStars={5}
                  rating={this.props.rating}
                />
              </View>

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
  componentDidMount() {
    this.setState({
      stepId: this.props.navigation.state.params.stepId
    });
  }
}

export default withNavigation(HotelForm);
