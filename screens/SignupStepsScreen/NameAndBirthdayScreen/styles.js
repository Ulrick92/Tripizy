import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    marginVertical: 30
  },
  container: {
    flex: 1,
    backgroundColor: "#0040cc",
    justifyContent: "center"
  },
  form: {
    alignItems: "center"
  },
  datePicker: {
    width: 200,
    marginBottom: 20
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
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    height: 50,
    width: 250,
    justifyContent: "center",
    borderColor: "white",
    borderRadius: 5
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  option: {
    color: "white",
    marginTop: 30
  },
  viewSelect: {
    marginTop: 20,
    width: 250
  }
});
