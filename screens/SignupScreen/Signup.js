import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import styles from "./styles";
import axios from "axios";

/* import "./style.css"; */

class SignUp extends Component {
  static navigationOptions = {
    title: "Sign Up",
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
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: ""
  };

  handleSubmit = event => {
    const { first_name, last_name, birthday, email, password } = this.state;
    const parsedDate = Date.parse(birthday);

    axios
      .post("http://localhost:3000/user/sign_up", {
        first_name,
        last_name,
        birthday: parsedDate,
        email,
        password
      })
      .then(response => {
        console.log("response", response.data);
        if (response.data && response.data.token) {
          this.props.navigation.navigate("Home", {
            _id: response.data._id,
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            profile_pic: response.data.profile_pic[0]
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
    event.preventDefault();
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>CREATE AN ACCOUNT</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.first_name}
          placeholder={"First Name"}
          onChangeText={value => {
            this.setState({
              first_name: value
            });
          }}
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.last_name}
          placeholder={"Last Name"}
          onChangeText={value => {
            this.setState({
              last_name: value
            });
          }}
        />
        <TextInput
          style={styles.input}
          value={this.state.birthday}
          placeholder={"MM/DD/YYYY"}
          onChangeText={value => {
            this.setState({
              birthday: value
            });
          }}
        />
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
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>

        <Text style={styles.option}>Login with Facebook or Google</Text>
      </KeyboardAvoidingView>
    );
  }
}

export default SignUp;

// const styles = StyleSheet.create({
//   title: {
//     textAlign: "center",
//     fontSize: 30,
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
//   },
//   option: {
//     color: "white",
//     marginTop: 30
//   }
// });
