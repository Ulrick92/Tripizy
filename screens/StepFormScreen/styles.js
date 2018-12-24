import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "#37449E"
  },
  hint: {
    marginTop: 0,
    textAlign: "center",
    fontSize: 20,
    color: "#37449E"
  },
  container: {
    flex: 1,
    backgroundColor: "#EAE1E2",
    alignItems: "center"
  },
  containerForm: {
    width: 350,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "white"
  },
  inputLine: {
    flexDirection: "row",
    padding: 10,
    width: "100%"
  },
  input: {
    fontSize: 18,
    marginLeft: 8,
    height: 25,
    padding: 5,
    color: "#37449E",
    borderColor: "white",
    borderBottomWidth: 1,
    alignItems: "center",
    backgroundColor: "white"
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
  }
});
