import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
    paddingTop: 400
  },
  coverContainer: {
    flex: 0.8,
    backgroundColor: "red"
  },
  button: {
    borderRadius: "20%",
    alignItems: "center",
    // backgroundColor: "blue",
    color: "white",
    marginRight: 100,
    marginLeft: 100,
    paddingTop: 0
  },
  buttonText: {
    color: "white"
  },
  buttonLeisure: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
