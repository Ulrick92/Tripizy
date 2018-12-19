import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 50,
    fontWeight: "200",
    textAlign: "center",
    marginTop: 70,
    marginBottom: 100
  },
  button: {
    marginTop: 20,
    backgroundColor: "rgba(59, 89, 152, 0.3)",
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
  clickableText: {
    fontSize: 20,
    color: "white",
    marginTop: 30,
    height: 50,
    width: 200,
    textAlign: "center"
  }
});
