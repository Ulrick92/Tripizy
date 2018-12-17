import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import styles from "./styles";

export default class SignUp extends Component {
  static navigationOptions = {
    header: null,
    title: "Welcome",
    headerStyle: {
      backgroundColor: "#002982"
    },
    headerTitleStyle: {
      fontSize: 24,
      color: "white",
      fontWeight: "200"
    }
  };

  // state = {
  //   // vérifier si l'user est authentifié
  //   isAuthenticated: false,
  //   email: "", // email à remplacer
  //   password: "" // password à remplacer
  // };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../../assets/images/stockholm.jpg")}
        >
          <Text style={styles.title}>tripizy</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CONTINUE WITH GOOGLE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CONTINUE WITH FACEBOOK</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            title="Go to Sign Up"
            onPress={() => this.props.navigation.navigate("NameAndBirthday")}
          >
            <Text style={styles.buttonText}>SIGN UP WITH EMAIL</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.clickableText}>Enter as guest</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            title="Go to Login"
            onPress={() => this.props.navigation.navigate("LogIn")}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   backgroundImage: {
//     flex: 1,
//     width: "100%",
//     alignItems: "center"
//   },
//   title: {
//     color: "white",
//     fontSize: 50,
//     fontWeight: "200",
//     textAlign: "center",
//     marginTop: 70,
//     marginBottom: 100
//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: "rgba(255, 255, 255, 0.3)",
//     height: 50,
//     width: 250,
//     justifyContent: "center",
//     borderColor: "white",
//     borderRadius: 5
//   },
//   buttonText: {
//     color: "white",
//     textAlign: "center"
//   },
//   clickableText: {
//     fontSize: 20,
//     color: "white",
//     marginTop: 30,
//     height: 50,
//     width: 200,
//     textAlign: "center"
//   }
// });
