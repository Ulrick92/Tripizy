import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "lightgrey"
  //   // paddingBottom: 400
  // },
  coverContainer: {
    flex: 0.8,
    height: 200,
    backgroundColor: "red"
  },
  // profileContainer: {
  //   backgroundColor: "blue"
  // },
  donneeUser: {
    // backgroundColor: "#37449E",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: 200
  },
  // button: {
  //   borderRadius: 20,
  //   alignItems: "center",
  //   // backgroundColor: "blue",
  //   color: "white",
  //   marginRight: 100,
  //   marginLeft: 100,
  //   paddingTop: 0
  // },
  // buttonText: {
  //   color: "white"
  // },
  buttonLeisure: {
    backgroundColor: "#37449E",

    top: 290,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  photos: {
    position: "relative",
    top: 280
  },
  bioContainer: {
    position: "relative",
    top: 420
  },
  button: {
    backgroundColor: "#37449E",

    alignItems: "center",
    position: "relative",
    top: 430,
    left: 90,
    padding: 7,
    width: 200,
    borderRadius: 10
  },
  buttonBIO: {
    color: "white"
  }
});
