import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet, View, Modal } from "react-native";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export default class TipsFilter extends Component {
  static navigationOptions = {
    header: null,
    title: "Add a cart",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  };

  state = {
    modalIsVisible: false,
    category: undefined
  };

  setModalVisibility(isVisible) {
    this.setState({ modalIsVisible: isVisible });
  }

  render() {
    const categoryList = [
      { name: "hotel", text: "Hotel" },
      { name: "road", text: "Road" },
      { name: "binoculars", text: "Point de vue" },
      { name: "pencil", text: "Texte libre" },
      { name: "picture-o", text: "Photos libres" },
      { name: "fort-awesome", text: "Historique" }
    ].map((category, i) => {
      return (
        <TouchableOpacity
          key={i}
          onPress={() => {
            this.props.handleCategory(category.name);
            this.setState({ category: category.name });
            this.setModalVisibility(false);
          }}
        >
          <View style={{ alignItems: "center" }}>
            <FontAwesomeIcon name={category.name} size={50} color="black" />
            <Text style={{ fontFamily: "Arial", fontSize: 12 }}>
              {category.text}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          onRequestClose={() => {
            this.setModalVisibility(false);
          }}
          visible={this.state.modalIsVisible}
        >
          <Text style={styles.hint}>Selectionnez un filtre :</Text>
          {categoryList}

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setModalVisibility(false);
              this.setState({ category: "" });
            }}
          >
            <Text style={styles.buttonText}>Annuler la sélection</Text>
          </TouchableOpacity>
        </Modal>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisibility(true);
          }}
        >
          <FontAwesomeIcon
            name={this.state.category ? this.state.category : "filter"}
            size={50}
            color="black"
          />
          <Text style={{ fontFamily: "Arial", fontSize: 12 }}>
            {this.state.category}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "#37449E"
  },
  hint: {
    marginTop: 200,
    textAlign: "center",
    fontSize: 20,
    color: "#37449E"
  },
  container: {
    flex: 1,
    backgroundColor: "#EAE1E2",
    alignItems: "center"
  },
  input: {
    width: 250,
    height: 60,
    color: "#37449E",
    borderColor: "white",
    borderBottomWidth: 1,
    paddingLeft: 10,
    alignItems: "center"
  },
  button: {
    marginTop: 20,
    backgroundColor: "#37449E",
    height: 50,
    width: 250,
    justifyContent: "center",
    borderColor: "white",
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  category: {
    marginTop: 15,
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  categorylabel: {
    marginTop: 15,
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
