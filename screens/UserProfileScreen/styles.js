import { StyleSheet } from "react-native";

export default StyleSheet.create({
  coverContainer: {
    height: 170,
    backgroundColor: "#37449E",
    alignItems: "center",
    position: "relative"
  },
  donneeName: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: 105,
    fontSize: 14,
    alignItems: "center"
  },
  donneeAgeCountry: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: 110
  },
  coverPicture: {
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  imageProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: "white",
    top: 100
  },
  textName: {
    fontSize: 20,
    fontWeight: "bold"
  },
  textAgeCountry: {
    color: "grey"
  },
  category: {
    marginTop: 15,
    width: 250,
    flexDirection: "row",
    justifyContent: "space-between",
    top: 150
  },
  categorylabel: {
    marginTop: 15,
    width: 250,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
