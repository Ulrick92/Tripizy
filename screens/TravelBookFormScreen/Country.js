import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage,
  StyleSheet
} from "react-native";

import axios from "axios";

export default class Country extends Component {
  static navigationOptions = {
    title: "Country",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#002982"
    },
    headerTitleStyle: {
      fontSize: 24,
      color: "white",
      fontWeight: "200"
    }
  };

  state = {
    country: "Sri Lanka",
    city: "Colombo"
  };

  redirectToLoginPage = () => {
    this.props.history.push("/log_in");
  };

  handleSubmit = event => {
    const { country, city } = this.state;

    AsyncStorage.getItem("token", (err, token) => {
      console.log("result", token);

      if (!token) {
        this.redirectToLoginPage();
      } else {
        // axios
        //   .post(
        //     "http://localhost:3000/travelbook/publish",
        //     {
        //       country
        //     },
        //     {
        //       headers: {
        //         authorization: `Bearer ${this.props.user.token}`
        //       }
        //     }
        //   )
        //   .then(response => {
        //     console.log("response", response.data);
        this.props.navigation.navigate("Dates", {
          title: this.props.navigation.state.params.title,
          description: this.props.navigation.state.params.description,
          country: this.state.country,
          city: this.state.city
        });
        console.log("title", this.props.navigation.state.params.title);
        console.log(this.state.country);
        console.log(this.state.city);

        //   })
        //   .catch(error => {
        //     console.log(error);
        //   });
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>CREATE A TRAVEL BOOK</Text>
        <Text style={styles.hint}>
          Which country are you planning to visit ?
        </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.country}
          placeholder={"ex : Select a country"}
          onChangeText={value => {
            this.setState({
              country: value
            });
          }}
        />
        <Text style={styles.hint}>Which city are you planning to visit ?</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.country}
          placeholder={"ex : Select a city"}
          onChangeText={value => {
            this.setState({
              city: value
            });
          }}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "white"
  },
  hint: {
    textAlign: "center",
    fontSize: 20,
    color: "white"
  },
  container: {
    flex: 1,
    backgroundColor: "#0040cc",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: 250,
    height: 60,
    color: "white",
    borderColor: "white",
    borderBottomWidth: 1,
    paddingLeft: 10,
    alignItems: "center"
  },
  button: {
    marginTop: 20,
    backgroundColor: "grey",
    height: 50,
    width: 250,
    justifyContent: "center",
    borderColor: "white",
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  }
});

// import React, { Component } from "react";
// import {
//   Text,
//   TouchableOpacity,
//   TextInput,
//   KeyboardAvoidingView,
//   StyleSheet
// } from "react-native";

// import axios from "axios";

// export default class Country extends Component {
//   static navigationOptions = {
//     title: "Country",
//     headerTintColor: "white",
//     headerStyle: {
//       backgroundColor: "#002982"
//     },
//     headerTitleStyle: {
//       fontSize: 24,
//       color: "white",
//       fontWeight: "200"
//     }
//   };

//   state = {
//     country: ""
//   };

//   redirectToLoginPage = () => {
//     this.props.history.push("/log_in");
//   };

//   handleSubmit = event => {
//     const { country } = this.state;

//     if (!this.props.user.token) {
//       this.redirectToLoginPage();
//     } else {
//       axios
//         .post(
//           "http://localhost:3000/travelbook/publish",
//           {
//             country
//           },
//           {
//             headers: {
//               authorization: `Bearer ${this.props.user.token}`
//             }
//           }
//         )
//         .then(response => {
//           console.log("response", response.data);
//           this.props.navigation.navigate("Dates", {
//             _id: response.data._id,
//             country: response.data.country
//           });
//         })
//         .catch(error => {
//           console.log(error);
//         });
//       event.preventDefault();
//     }
//   };

//   render() {
//     return (
//       <KeyboardAvoidingView style={styles.container} behavior="padding">
//         <Text style={styles.title}>CREATE AN ACCOUNT</Text>
//         <Text style={styles.hint}>
//           Which country are you planning to visit ?
//         </Text>
//         <TextInput
//           style={styles.input}
//           autoCapitalize="none"
//           value={this.state.country}
//           placeholder={"ex : Select a country"}
//           onChangeText={value => {
//             this.setState({
//               country: value
//             });
//           }}
//         />

//         <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
//           <Text style={styles.buttonText}>NEXT</Text>
//         </TouchableOpacity>
//       </KeyboardAvoidingView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   title: {
//     textAlign: "center",
//     fontSize: 30,
//     color: "white"
//   },
//   hint: {
//     textAlign: "center",
//     fontSize: 20,
//     color: "white"
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#0040cc",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   input: {
//     width: 250,
//     height: 60,
//     color: "white",
//     borderColor: "white",
//     borderBottomWidth: 1,
//     paddingLeft: 10,
//     alignItems: "center"
//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: "grey",
//     height: 50,
//     width: 250,
//     justifyContent: "center",
//     borderColor: "white",
//     borderRadius: 10
//   },
//   buttonText: {
//     color: "white",
//     textAlign: "center"
//   }
// });
