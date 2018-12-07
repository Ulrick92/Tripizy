import React from "react";
import { FlatList, Text } from "react-native";

const _renderItem = ({ item }) => <Text>{item.email}</Text>;

export default (UserList = props => (
  <FlatList data={props.data} renderItem={_renderItem} />
));
