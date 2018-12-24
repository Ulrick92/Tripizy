import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE1E2"
  },
  loading: {
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    borderColor: "rgba(0,0,0,0.2)",
    width: 50,
    height: 50,
    backgroundColor: "#0040cc",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    right: 10
  },
  buttonText: {
    color: "white",
    fontSize: 30
  },
  actionButtonIcon: {
    fontSize: 25,
    height: 24,
    color: "white"
  }
});
