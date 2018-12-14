import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  Image
} from "react-native";
import { CheckBox } from "react-native-elements";
import "@expo/vector-icons";
import styles from "./styles";
import axios from "axios";

export default class Category extends Component {
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
    backpack: false,
    family: false,
    work: false,
    comfort: false,
    worldTour: false,
    cruising: false,
    nature: false,
    roadTrip: false
  };

  redirectToLoginPage = () => {
    this.props.history.push("/log_in");
  };

  handleSubmit = event => {
    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      categoriesToString = () => {
        console.log(this.state);
        const categoriesArray = [];
        const keysArray = Object.keys(this.state);
        const valuesArray = Object.values(this.state);

        for (let i = 0; i < keysArray.length; i++) {
          if (valuesArray[i] === true) {
            categoriesArray.push(keysArray[i]);
          }
        }
        return categoriesArray;
      };

      const valeur = categoriesToString();
      console.log(valeur); // va afficher categoriesArray

      if (!token) {
        this.redirectToLoginPage();
      } else {
        axios
          .post(
            "https://back-tripizy.herokuapp.com/travelbook/publish",
            {
              title: this.props.navigation.state.params.title,
              description: this.props.navigation.state.params.description,
              countries: this.props.navigation.state.params.countries,
              country: this.props.navigation.state.params.country,
              start_date: this.props.navigation.state.params.start_date,
              end_date: this.props.navigation.state.params.end_date,
              photos: this.props.navigation.state.params.photos,
              category: valeur
            },
            {
              headers: {
                authorization: `Bearer ${token}`
              }
            }
          )

          .then(response => {
            console.log("response", response.data);

            this.props.navigation.navigate("MyTrips", {
              title: response.data.title,
              description: response.data.description,
              countries: response.data.countries,
              country: response.data.country,
              city: response.data.city,
              start_date: response.data.start_date,
              end_date: response.data.end_date,
              photos: response.data.photos,
              category: response.data.category
            });
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.buttonContainer}>
          <Text style={styles.title}>Categories</Text>
          <Text style={styles.hint}>What is your travelling style ?</Text>
          <View style={styles.buttonRow}>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../../assets/icons/backpack-filled-50.png")}
              />
              <Text style={styles.label}>Backpack</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                style={styles.checkBox}
                checked={this.state.backpack}
                onPress={() =>
                  this.setState({ backpack: !this.state.backpack })
                }
              />
            </View>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../../assets/icons/family-filled-50.png")}
              />
              <Text style={styles.label}>Family</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.family}
                onPress={() => this.setState({ family: !this.state.family })}
              />
            </View>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../../assets/icons/suitcase-filled-50.png")}
              />
              <Text style={styles.label}>Work</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.work}
                onPress={() => this.setState({ work: !this.state.work })}
              />
            </View>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../../assets/icons/diamond-filled-50.png")}
              />
              <Text style={styles.label}>Comfort</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.comfort}
                onPress={() => this.setState({ comfort: !this.state.comfort })}
              />
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../../assets/icons/europe-filled-50.png")}
              />
              <Text style={styles.label}>World Tour</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.worldTour}
                onPress={() =>
                  this.setState({ worldTour: !this.state.worldTour })
                }
              />
            </View>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../../assets/icons/cruise-ship-filled-50.png")}
              />
              <Text style={styles.label}>Cruising</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.cruising}
                onPress={() =>
                  this.setState({ cruising: !this.state.cruising })
                }
              />
            </View>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../../assets/icons/national-park-filled-50.png")}
              />
              <Text style={styles.label}>Nature</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.nature}
                onPress={() => this.setState({ nature: !this.state.nature })}
              />
            </View>
            <View style={styles.buttonIcon}>
              <Image
                style={{ tintColor: "white" }}
                source={require("../../../assets/icons/road-filled-50.png")}
              />
              <Text style={styles.label}>Road Trip</Text>
              <CheckBox
                textStyle={styles.textStyle}
                containerStyle={styles.containerStyle}
                center={true}
                style={styles.checkBox}
                checked={this.state.roadTrip}
                onPress={() =>
                  this.setState({ roadTrip: !this.state.roadTrip })
                }
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

// import React, { Component } from "react";
// import {
//   Text,
//   View,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   AsyncStorage,
//   Image
// } from "react-native";
// import { CheckBox } from "react-native-elements";
// import "@expo/vector-icons";
// import styles from "./styles";
// import axios from "axios";

// export default class Category extends Component {
//   static navigationOptions = {
//     title: "Create a Travel Book",
//     headerTintColor: "white",
//     headerStyle: {
//       backgroundColor: "#002982"
//     },
//     headerTitleStyle: {
//       fontSize: 20,
//       color: "white",
//       fontWeight: "200"
//     }
//   };

//   state = {
//     backpack: false,
//     family: false,
//     work: false,
//     comfort: false,
//     worldTour: false,
//     cruising: false,
//     nature: false,
//     roadTrip: false
//   };

//   redirectToLoginPage = () => {
//     this.props.history.push("/log_in");
//   };

//   handleSubmit = event => {
//     AsyncStorage.getItem("token", (err, token) => {
//       console.log("result", token);

//       categoriesToString = () => {
//         console.log(this.state);
//         const categoriesArray = [];
//         const keysArray = Object.keys(this.state);
//         const valuesArray = Object.values(this.state);

//         for (let i = 0; i < keysArray.length; i++) {
//           if (valuesArray[i] === true) {
//             categoriesArray.push(keysArray[i]);
//           }
//         }
//         return categoriesArray;
//       };

//       const valeur = categoriesToString();
//       console.log(valeur); // va afficher categoriesArray

//       if (!token) {
//         this.redirectToLoginPage();
//       } else {
//         axios
//           .post(
//             "https://back-tripizy.herokuapp.com/travelbook/publish",
//             {
//               title: this.props.navigation.state.params.title,
//               country: this.props.navigation.state.params.country,
//               city: this.props.navigation.state.params.city,
//               start_date: Date.parse(
//                 this.props.navigation.state.params.start_date
//               ),
//               end_date: Date.parse(this.props.navigation.state.params.end_date),
//               photos: this.props.navigation.state.params.photos,
//               category: valeur
//             },
//             {
//               headers: {
//                 authorization: `Bearer ${token}`
//               }
//             }
//           )

//           .then(response => {
//             console.log("response", response.data);

//             this.props.navigation.navigate("MyTrips", {
//               title: response.data.title,
//               description: response.data.description,
//               country: response.data.country,
//               city: response.data.city,
//               start_date: response.data.start_date,
//               end_date: response.data.end_date,
//               photos: response.data.photos,
//               category: response.data.category
//             });
//           })
//           .catch(error => {
//             console.log(error);
//           });
//       }
//     });
//   };

//   render() {
//     return (
//       <KeyboardAvoidingView style={styles.container} behavior="padding">
//         <View style={styles.buttonContainer}>
//           <Text style={styles.title}>Categories</Text>
//           <Text style={styles.hint}>What is your travelling style ?</Text>
//           <View style={styles.buttonRow}>
//             <View style={styles.buttonIcon}>
//               <Image
//                 style={{ tintColor: "white" }}
//                 source={require("../../../assets/icons/backpack-filled-50.png")}
//               />
//               <Text style={styles.label}>Backpack</Text>
//               <CheckBox
//                 textStyle={styles.textStyle}
//                 containerStyle={styles.containerStyle}
//                 style={styles.checkBox}
//                 checked={this.state.backpack}
//                 onPress={() =>
//                   this.setState({ backpack: !this.state.backpack })
//                 }
//               />
//             </View>
//             <View style={styles.buttonIcon}>
//               <Image
//                 style={{ tintColor: "white" }}
//                 source={require("../../../assets/icons/family-filled-50.png")}
//               />
//               <Text style={styles.label}>Family</Text>
//               <CheckBox
//                 textStyle={styles.textStyle}
//                 containerStyle={styles.containerStyle}
//                 center={true}
//                 style={styles.checkBox}
//                 checked={this.state.family}
//                 onPress={() => this.setState({ family: true })}
//               />
//             </View>
//             <View style={styles.buttonIcon}>
//               <Image
//                 style={{ tintColor: "white" }}
//                 source={require("../../../assets/icons/suitcase-filled-50.png")}
//               />
//               <Text style={styles.label}>Work</Text>
//               <CheckBox
//                 textStyle={styles.textStyle}
//                 containerStyle={styles.containerStyle}
//                 center={true}
//                 style={styles.checkBox}
//                 checked={this.state.work}
//                 onPress={() => this.setState({ work: true })}
//               />
//             </View>
//             <View style={styles.buttonIcon}>
//               <Image
//                 style={{ tintColor: "white" }}
//                 source={require("../../../assets/icons/diamond-filled-50.png")}
//               />
//               <Text style={styles.label}>Comfort</Text>
//               <CheckBox
//                 textStyle={styles.textStyle}
//                 containerStyle={styles.containerStyle}
//                 center={true}
//                 style={styles.checkBox}
//                 checked={this.state.comfort}
//                 onPress={() => this.setState({ comfort: true })}
//               />
//             </View>
//           </View>
//           <View style={styles.buttonRow}>
//             <View style={styles.buttonIcon}>
//               <Image
//                 style={{ tintColor: "white" }}
//                 source={require("../../../assets/icons/europe-filled-50.png")}
//               />
//               <Text style={styles.label}>World Tour</Text>
//               <CheckBox
//                 textStyle={styles.textStyle}
//                 containerStyle={styles.containerStyle}
//                 center={true}
//                 style={styles.checkBox}
//                 checked={this.state.worldTour}
//                 onPress={() => this.setState({ worldTour: true })}
//               />
//             </View>
//             <View style={styles.buttonIcon}>
//               <Image
//                 style={{ tintColor: "white" }}
//                 source={require("../../../assets/icons/cruise-ship-filled-50.png")}
//               />
//               <Text style={styles.label}>Cruising</Text>
//               <CheckBox
//                 textStyle={styles.textStyle}
//                 containerStyle={styles.containerStyle}
//                 center={true}
//                 style={styles.checkBox}
//                 checked={this.state.cruising}
//                 onPress={() => this.setState({ cruising: true })}
//               />
//             </View>
//             <View style={styles.buttonIcon}>
//               <Image
//                 style={{ tintColor: "white" }}
//                 source={require("../../../assets/icons/national-park-filled-50.png")}
//               />
//               <Text style={styles.label}>Nature</Text>
//               <CheckBox
//                 textStyle={styles.textStyle}
//                 containerStyle={styles.containerStyle}
//                 center={true}
//                 style={styles.checkBox}
//                 checked={this.state.nature}
//                 onPress={() => this.setState({ nature: true })}
//               />
//             </View>
//             <View style={styles.buttonIcon}>
//               <Image
//                 style={{ tintColor: "white" }}
//                 source={require("../../../assets/icons/road-filled-50.png")}
//               />
//               <Text style={styles.label}>Road Trip</Text>
//               <CheckBox
//                 textStyle={styles.textStyle}
//                 containerStyle={styles.containerStyle}
//                 center={true}
//                 style={styles.checkBox}
//                 checked={this.state.roadTrip}
//                 onPress={() => this.setState({ roadTrip: true })}
//               />
//             </View>
//           </View>
//           <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
//             <Text style={styles.buttonText}>SUBMIT</Text>
//           </TouchableOpacity>
//         </View>
//       </KeyboardAvoidingView>
//     );
//   }
// }
