import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 30,
    textAlign: "center"
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10
  },
  picker: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50
  },
  tips: {
    flex: 2,
    borderColor: "red"
    // backgroundColor: "blue"
  },
  tipscontainer: {
    textAlign: "center",
    // backgroundColor: "blue",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black"
  },
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    backgroundColor: "white",
    color: "black"
  }
});
