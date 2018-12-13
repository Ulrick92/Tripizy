import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0040cc"
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    marginVertical: 30,

    fontWeight: "200"
  },
  hint: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    marginBottom: 10,
    marginHorizontal: 20,
    fontWeight: "200"
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 30,
    justifyContent: "space-around"
  },
  buttonIcon: {
    flexDirection: "column",
    alignItems: "center"
  },
  label: {
    color: "white",
    marginVertical: 10
  },
  checkBox: {},
  button: {
    marginTop: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    height: 50,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderRadius: 5
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  textStyle: {
    display: "none"
  },
  containerStyle: {
    width: 60,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});
