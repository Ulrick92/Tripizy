import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
// import styles from "./styles";
import axios from "axios";

class Photos extends Component {
  static navigationOptions = {
    title: "Pictures",
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
    photos: []
  };

  redirectToLoginPage = () => {
    this.props.history.push("/log_in");
  };

  handleFiles = photos => {
    const newPhotos = [...this.state.photos, ...photos.base64];
    this.setState({
      photos: newPhotos
    });
  };

  handleSubmit = event => {
    const { photos } = this.state;

    if (!this.props.user.token) {
      this.redirectToLoginPage();
    } else {
      axios
        .post(
          "http://localhost:3000/travelbook/publish",
          {
            photos
          },
          {
            headers: {
              authorization: `Bearer ${this.props.user.token}`
            }
          }
        )
        .then(response => {
          console.log("response", response.data);

          this.props.navigation.navigate("Category", {
            _id: response.data._id,
            photos: response.data.photos
          });
        })
        .catch(error => {
          console.log(error);
        });
      event.preventDefault();
    }
  };

  render() {
    const photosArray = [];
    for (let i = 0; i < this.state.photos.length; i++) {
      photosArray.push(
        <Image
          key={i}
          onClick={() => {
            // En cliquant sur l'image, le fichier sera supprimé
            const newPhotos = [...this.state.photos];
            newPhotos.splice(i, 1);
            this.setState({ photos: newPhotos });
          }}
          src={this.state.photos[i]}
          alt="Travel"
        />
      );

      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Text style={styles.title}>CREATE AN ACCOUNT</Text>
          <Text style={styles.hint}>Do you want to add a cover picture ?</Text>
          <Text>Sélection des dernières photos</Text>
          <TouchableOpacity style={styles.clickableImage}>
            <ReactFileReader
              style={styles.picture}
              fileTypes={[".png", ".jpg"]}
              base64={true}
              multipleFiles={true} // `false si une seule image`
              handleFiles={this.handleFiles}
            />
          </TouchableOpacity>
          <Text>Click to import from your device</Text>
          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      );
    }
  }
}

export default Photos;

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
