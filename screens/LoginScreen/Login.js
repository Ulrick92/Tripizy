// import React, { Component } from "react";
// import {
//   Text,
//   TouchableOpacity,
//   AsyncStorage,
//   TextInput,
//   KeyboardAvoidingView
// } from "react-native";
// import styles from "./styles";
// import axios from "axios";

// export default class LogIn extends Component {
//   static navigationOptions = {
//     title: "Login",
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
//     // vérifier si l'user est authentifié
//     // pour test : farid@lereacteur.io - azerty
//     isAuthenticated: false,
//     email: "",
//     password: ""
//   };

//   handleSubmit = () => {
//     const { email, password } = this.state;

//     axios

//       .post("http://localhost:3000/user/log_in", {
//         email,
//         password
//       })
//       .then(response => {
//         console.log("response", response.data);
//         if (response.data.token) {
//           AsyncStorage.setItem("token", response.data.token).then(() => {
//             // authentifier l'user
//             this.setState({
//               isAuthenticated: true
//             });
//             const { navigate } = this.props.navigation;
//             navigate("List");

//             AsyncStorage.getItem("token", (err, result) => {
//               console.log("result", result);
//             });
//           });
//         }
//       })
//       .catch(error => {
//         // handle error
//         console.log("error", error);
//       });
//   };

//   render() {
//     return (
//       <KeyboardAvoidingView style={styles.container} behavior="padding">
//         <Text style={styles.title}>Hello !</Text>
//         <TextInput
//           style={styles.input}
//           autoCapitalize="none"
//           value={this.state.email}
//           placeholder={"Email"}
//           onChangeText={value => {
//             this.setState({
//               email: value
//             });
//           }}
//         />
//         <TextInput
//           style={styles.input}
//           autoCapitalize="none"
//           value={this.state.password}
//           placeholder={"Password"}
//           secureTextEntry={true}
//           onChangeText={value => {
//             this.setState({
//               password: value
//             });
//           }}
//         />
//         <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
//           <Text style={styles.buttonText}>CONNECTION</Text>
//         </TouchableOpacity>
//       </KeyboardAvoidingView>
//     );
//   }
// }

import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import styles from "./styles";
import axios from "axios";

export default class LogIn extends Component {
  static navigationOptions = {
    title: "Login",
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
    // vérifier si l'user est authentifié
    // pour test : farid@lereacteur.io - azerty
    isAuthenticated: false,
    email: "",
    password: ""
  };

  handleSubmit = () => {
    const { email, password } = this.state;

    axios

      .post("http://localhost:3000/user/log_in", {
        email,
        password
      })
      .then(response => {
        console.log("response", response.data);
        if (response.data.token) {
          AsyncStorage.setItem("token", response.data.token).then(() => {
            // authentifier l'user
            this.setState({
              isAuthenticated: true
            });
            const { navigate } = this.props.navigation;
            navigate("MyTrips", {
              travelbooks: response.data.travelbooks
            });

            AsyncStorage.getItem("token", (err, result) => {
              console.log("result", result);
            });
          });
        }
      })
      .catch(error => {
        // handle error
        console.log("error", error);
      });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>Hello !</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.email}
          placeholder={"Email"}
          onChangeText={value => {
            this.setState({
              email: value
            });
          }}
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.password}
          placeholder={"Password"}
          secureTextEntry={true}
          onChangeText={value => {
            this.setState({
              password: value
            });
          }}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>CONNECTION</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
