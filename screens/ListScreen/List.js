import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Platform,
  ImageBackground
} from "react-native";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Travel Books",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  };

  state = {
    travels: []
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* mettre la card à cet endroit */}
        <View style={{ margin: 20 }}>
          <ImageBackground
            source={require("../../assets/images/sri_lanka.png")}
            style={{
              width: "100%",
              height: 200,
              justifyContent: "flex-end"
            }}
          >
            <Text
              style={{
                padding: 5,
                position: "absolute",
                bottom: 10,
                left: 10,
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                fontSize: 20
                // opacity: 0.5,
                // backgroundColor: "black"
              }}
            >
              Sri Lanka
            </Text>
          </ImageBackground>

          <View style={{ flexDirection: "row" }}>
            <Text>Sri Lanka</Text>
            <Text>From 10th sept 2018</Text>
          </View>
          <Text>Countries visited :</Text>
        </View>

        <View style={{ margin: 20 }}>
          <ImageBackground
            source={require("../../assets/images/bosnia.png")}
            style={{
              width: "100%",
              height: 200,
              justifyContent: "flex-end"
            }}
          >
            <Text
              style={{
                padding: 5,
                position: "absolute",
                bottom: 10,
                left: 10,
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                fontSize: 20
                // opacity: 0.5,
                // backgroundColor: "black"
              }}
            >
              Bosnia
            </Text>
          </ImageBackground>
          <View style={{ flexDirection: "row" }}>
            <Text>Bosnia</Text>
            <Text>From 27th oct 2018</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },

  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
