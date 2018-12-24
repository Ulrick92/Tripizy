import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE1E2"
  },
  button: {
    position: "absolute",
    bottom: 10,
    alignSelf: "flex-end",
    shadowOpacity: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#EAE1E2",
    borderRadius: 100 / 2,
    right: 10
  },
  buttonText: {
    fontSize: 30
  },
  actionButtonIcon: {
    fontSize: 25,
    height: 24,
    color: "white"
  }
});
