import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";
import t from "tcomb-form-native";
import styles from "./styles";

const Form = t.form.Form;

const bioForm = t.struct({
  bio: t.String
});

export default class UserProfile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.coverContainer}>
          {/* <View style={styles.profilePicture} /> */}
        </View>

        <View style={styles.buttonLeisure}>
          <Button onPress={this._onPressButton} title="About" />
          <Button onPress={this._onPressButton} title="Trips" />
          <Button onPress={this._onPressButton} title="Friends" />
          <Button onPress={this._onPressButton} title="Activity" />
        </View>

        <Text style={styles.photos}>Photos</Text>
        <View style={styles.bioContainer}>
          <Form type={bioForm} />
        </View>

        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.buttonBIO}> EDIT PROFILE </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
