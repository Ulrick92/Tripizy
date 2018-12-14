import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from "react-native";

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this.getUserToken();
  }

  // Fetch the token from storage then navigate to our appropriate place
  getUserToken() {
    AsyncStorage.getItem("token").then(userToken => {
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(userToken ? "TravelBook" : "Auth");
      // this.props.navigation.navigate("Auth");
    });
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        {/* <StatusBar barStyle="light-content" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AuthLoadingScreen;
