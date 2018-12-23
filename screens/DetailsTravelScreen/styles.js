import { StyleSheet } from "react-native";

export default StyleSheet.create({
  travelCard: {
    flex: 1,
    margin: 10
  },
  backgroundImage: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
    shadowOpacity: 50,
    marginBottom: 5
  },
  textBackgroundImage: {
    padding: 5,
    position: "absolute",
    bottom: 20, //pour augmenter ou descendre le texte dans l'image
    left: 10,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    fontSize: 20
  },
  dateBackgroundImage: {
    padding: 2,
    position: "absolute",
    bottom: 2, //pour augmenter ou descendre le texte dans l'image
    left: 10,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    fontSize: 10
  },

  bottomPart: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#A3BADC"
  },
  userPart: {
    justifyContent: "center",
    backgroundColor: "#A3BADC",
    padding: 5,
    shadowOpacity: 50
  },
  descriptionPart: {
    // backgroundColor: "#A3BADC",
    paddingLeft: 10,
    width: 291
  },
  button: {
    position: "absolute",
    bottom: 25,
    right: 25,
    alignSelf: "flex-end",
    shadowOpacity: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#EAE1E2",
    borderRadius: 100 / 2
  },
  buttonTips: {
    position: "absolute",
    bottom: 25,
    left: 25,
    alignSelf: "flex-end",
    shadowOpacity: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#EAE1E2",
    borderRadius: 100 / 2
  },
  mapView: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    shadowOpacity: 50
  },
  actionButtonIcon: {
    fontSize: 25,
    height: 24,
    color: "white"
  }
});
