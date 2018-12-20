import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import config from "../../../config";
import axios from "axios";
import styles from "./styles";

import _ from "lodash";

export default class TitleAndDescription extends Component {
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
    title: "",
    description: "",
    error: ""
  };

  redirectToLoginPage = () => {
    this.props.navigation.navigate("Login");
  };

  handleSubmit = text => {
    const { title, description } = this.state;
    const { travelbooks } = this.props.navigation.state.params;

    AsyncStorage.getItem("token", (err, token) => {
      /* console.log("result", token);
      console.log("travelbooks", travelbooks); */

      if (!token) {
        this.redirectToLoginPage();
      } else {
        if (!_.some(travelbooks, ["title", title])) {
          this.setState({ error: "" }, () =>
            this.props.navigation.navigate("Country", { title, description })
          );
          /* axios
          .get(encodeURI(`${config.DOMAIN}travelbook/title/` + title), {
            headers: {
              authorization: `Bearer ${token}`
            }
          })
          .then(response => {
            this.setState({ error: "" }, () =>
              this.props.navigation.navigate("Country", { title, description })
            );
          })
          .catch(error => {
            // console.log(error.response.data);
            this.setState({ error: error.response.data.error });
          }); */
        } else {
          this.setState({
            error: "Le titre existe déjà" /* error.response.data.error */
          });
        }
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>Title and Description</Text>
        <Text style={styles.hint}>What is the title of your travel book ?</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.title}
          placeholder={"ex : Honeymoon in Sri Lanka"}
          onChangeText={text => this.setState({ title: text })}
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={this.state.description}
          placeholder={"Description"}
          onChangeText={text => this.setState({ description: text })}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
        <Text style={{ color: "red", marginVertical: 30 }}>
          {this.state.error}
        </Text>
      </KeyboardAvoidingView>
    );
  }
}

// import React, { Component } from "react";
// import {
//   Text,
//   TouchableOpacity,
//   TextInput,
//   KeyboardAvoidingView,
//   AsyncStorage
// } from "react-native";
// import styles from "./styles";

// export default class TitleAndDescription extends Component {
//   static navigationOptions = ({ navigation }) => ({
//     title: "Travel Books",
//     headerStyle: {
//       backgroundColor: "#37449E"
//     },
//     headerTintColor: "#fff"
//   });

//   // static navigationOptions = {
//   //   title: "Create a Travel Book",
//   //   headerTintColor: "white",
//   //   headerStyle: {
//   //     backgroundColor: "#002982"
//   //   },
//   //   headerTitleStyle: {
//   //     fontSize: 20,
//   //     color: "white",
//   //     fontWeight: "200"
//   //   }
//   // };

//   state = {
//     title: "",
//     description: ""
//   };

//   redirectToLoginPage = () => {
//     this.props.navigation.navigate("Login");
//   };

//   handleSubmit = text => {
//     const { title, description } = this.state;
//     const { travelbooks } = this.props.navigation.state.params;

//     console.log(travelbooks);

//     AsyncStorage.getItem("token", (err, token) => {
//       console.log("result", token);

//       if (!token) {
//         this.redirectToLoginPage();
//       } else if (token && title && title !== "") {
//         this.props.navigation.navigate("Country", {
//           title: title,
//           description: description
//         });
//         console.log(title);
//         console.log(description);
//       } else {
//         err;
//         console.log("error", error);
//       }
//     });
//   };

//   render() {
//     return (
//       <KeyboardAvoidingView style={styles.container} behavior="padding">
//         <Text style={styles.title}>Title and Description</Text>
//         <Text style={styles.hint}>What is the title of your travel book ?</Text>
//         <TextInput
//           style={styles.input}
//           autoCapitalize="none"
//           value={this.state.title}
//           placeholder={"ex : Honeymoon in Sri Lanka"}
//           onChangeText={text => this.setState({ title: text })}
//         />
//         <TextInput
//           style={styles.input}
//           autoCapitalize="none"
//           value={this.state.description}
//           placeholder={"Description"}
//           onChangeText={text => this.setState({ description: text })}
//         />

//         <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
//           <Text style={styles.buttonText}>NEXT</Text>
//         </TouchableOpacity>
//       </KeyboardAvoidingView>
//     );
//   }
// }
