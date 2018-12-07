import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
    paddingBottom: 400
  },
  coverContainer: {
    flex: 0.8,
    backgroundColor: "red"
  },
  profileContainer: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 100,
    left: 135,
    top: 90,
    // height: 500,

    backgroundColor: "blue"
  },
  button: {
    borderRadius: 20,
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
    top: 90,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  photos: {
    top: 180
  },
  bioContainer: {
    top: 300
  },
  buttonBIO: {
    top: 300
  }
});
