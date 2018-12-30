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
import { withNavigation } from "react-navigation";
import axios from "axios";
import { Fumi } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialsIcon from "react-native-vector-icons/MaterialIcons";
import { FormLabel, FormInput, Rating } from "react-native-elements";
import DatePicker from "react-native-datepicker";
import { ImagePicker, Permissions } from "expo";
import config from "../../config";

class FreeForm extends Component {
  static navigationOptions = {
    title: "Travel Book",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  };

  state = {
    stepId: "",
    category: "FreeText",
    company_name: "",
    city: "",
    adress: "",
    start_date: "",
    end_date: "",
    photos: null,
    price: "",
    rating: undefined,
    web_site: "",
    tel: "",
    description:
      "Protectorum simulans communi iam subinde et cum venerit uti perniciem quaedam est adiumenta uti scribens contentum scribens Syriam et.",
    currency: "USD"
  };

  redirectToLoginPage = () => {
    this.props.navigation.navigate("Login");
  };

  handleSubmit = event => {
    AsyncStorage.getItem("token", (err, token) => {
      const {
        stepId,
        category,
        company_name,
        city,
        adress,
        start_date,
        end_date,
        web_site,
        tel,
        description,
        price,
        currency,
        rating,
        photos
      } = this.state;

      if (!token) {
        this.redirectToLoginPage();
      } else {
        axios
          .post(
            `${config.DOMAIN}tips/publish`,
            {
              step_id: stepId,
              category: category,
              company_name: this.state.company_name,
              city: this.state.city,
              adress: this.state.adress,
              start_date: this.state.start_date,
              end_date: this.state.end_date,
              price: this.state.price,
              currency: this.state.currency,
              web_site: this.state.web_site,
              tel: this.state.tel,
              description: this.state.description,
              rate: rating,
              files: [photos]
            },
            {
              headers: {
                authorization: `Bearer ${token}`
              }
            }
          )

          .then(response => {
            this.props.navigation.navigate("DetailsTravel", {
              category: response.data.category,
              company_name: response.data.company_name,
              city: response.data.city,
              adress: response.data.adress,
              start_date: response.data.start_date,
              end_date: response.data.end_date,
              price: response.data.price,
              currency: response.data.currency,
              web_site: response.data.web_site,
              tel: response.data.tel,
              description: response.data.description,
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

  ratingCompleted = rating => {
    this.setState({ rating: [Number(rating)] });
    console.log("Rating is: " + rating);
  };

  renderAddDate = () => {
    console.log("Hey Ho");
    <DatePicker
      style={{
        width: 200,
        marginBottom: 20
      }}
      date={this.state.end_date}
      showIcon={false}
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      minDate="2016-05-01"
      maxDate="2016-06-01"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={datePickerCustomStyle}
      onDateChange={date => {
        this.setState({ end_date: date });
      }}
    />;
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#a9ceca" }}>
        <KeyboardAvoidingView behavior="padding">
          <View style={[styles.card2, { backgroundColor: "#a9ceca" }]}>
            <Text style={styles.title}>Informations</Text>
            <Fumi
              style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }}
              label={"Title :"}
              iconClass={FontAwesomeIcon}
              iconName={"pencil"}
              iconColor={"#37449E"}
              iconSize={20}
              autoCorrect={false}
              value={this.state.company_name}
              onChangeText={text => this.setState({ company_name: text })}
            />
            <Fumi
              label={"City :"}
              iconClass={MaterialsIcon}
              iconName={"place"}
              iconColor={"#37449E"}
              iconSize={20}
              value={this.state.city}
              onChangeText={text => this.setState({ city: text })}
            />

            <Text style={styles.title}>Impressions</Text>
            <View style={{ backgroundColor: "white" }}>
              <View style={{ flexDirection: "row" }} />
              <FormLabel>Describe your day :</FormLabel>
              <TextInput
                style={styles.descriptionInput}
                multiline={true}
                autoCapitalize="none"
                maxLength={500}
                placeholder={"Tell us everything about your experience! ;)"}
                value={this.state.description}
                onChangeText={text => this.setState({ description: text })}
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
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.handleSubmit}
              >
                <Text style={styles.buttonText}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }

  componentDidMount() {
    this.setState({
      stepId: this.props.navigation.state.params.stepId
    });
    console.log(
      "stepId in Freeform : ",
      this.props.navigation.state.params.stepId
    );
  }
}

export default withNavigation(FreeForm);

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
    top: 5,
    marginBottom: 15
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
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  }
});

const datePickerCustomStyle = {
  dateIcon: {
    position: "absolute",
    left: 0,
    top: 4,
    marginLeft: 0
  },
  dateInput: {
    marginLeft: 36
  },
  placeholderText: {
    color: "grey"
  },
  dateText: {
    color: "black"
  }
};
