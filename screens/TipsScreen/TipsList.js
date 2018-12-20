import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  AsyncStorage,
  FlatList
} from "react-native";
import TipsCard from "../../components/TipsCard";

import axios from "axios";
import SelectCategory from "./TipsFilter";

import config from "../../config";
import StepCard from "../../components/StepCard";
import { SearchBar } from "react-native-elements";
export default class TipsListTest extends React.Component {
  static navigationOptions = {
    header: null,
    title: "Tips",
    headerStyle: {
      backgroundColor: "#37449E"
    },
    headerTintColor: "#fff"
  };

  state = {
    tips: [],
    city: "",
    companyName: "",
    category: ""
  };
  onChangeSearchCity = city => {
    this.setState({ city: city });
    axios
      .get(`${config.DOMAIN}tips/`, {
        params: {
          city: city,
          company_name: this.state.companyName,
          category: this.state.category
        }
      })
      .then(response => {
        this.setState({
          tips: response.data
        });
      })
      .catch(err => {
        console.log("Error", err.message);
      });
  };
  onChangeSearchCompanyName = companyName => {
    this.setState({ companyName: companyName });
    axios
      .get(`${config.DOMAIN}tips/`, {
        params: {
          company_name: companyName,
          city: this.state.city,
          category: this.state.category
        }
      })
      .then(response => {
        this.setState({
          tips: response.data
        });
      })
      .catch(err => {
        console.log("Error", err.message);
      });
  };
  _keyExtractor = (item, index) => item._id; //permet d'enlever les messages d'erreurs

  handleCategory = category => {
    this.setState({ category: category });
    axios
      .get(`${config.DOMAIN}tips/`, {
        params: {
          company_name: this.state.companyName,
          city: this.state.city,
          category: category
        }
      })
      .then(response => {
        this.setState({
          tips: response.data
        });
      })
      .catch(err => {
        console.log("Error", err.message);
      });
  };
  render() {
    return (
      <View>
        <SearchBar
          onChangeText={this.onChangeSearchCompanyName}
          placeholder="Nom"
          placeholderTextColor="#AAAAAA"
          clearIcon={{ color: "#AAAAAA" }}
          inputStyle={{ backgroundColor: "white" }}
        />
        <SearchBar
          onChangeText={this.onChangeSearchCity}
          placeholder="Ville"
          placeholderTextColor="#AAAAAA"
          clearIcon={{ color: "#AAAAAA" }}
          inputStyle={{ backgroundColor: "white" }}
        />
        <View>
          <SelectCategory handleCategory={this.handleCategory} />
        </View>

        <FlatList
          keyExtractor={this._keyExtractor}
          data={this.state.tips}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.category}</Text>
                <Text>{item.company_name}</Text>
                <Text>{item.city}</Text>
                <Text>{item.start_date}</Text>
                <Text>{item.end_date}</Text>
                <StepCard />
                <TipsCard
                  company_name={item.company_name}
                  city={item.city}
                  photos={item.photos[0]}
                  rate={item.rate[0]}
                  pricePerDay={item.pricePerDay}
                />
              </View>
            );
          }}
        />
      </View>
    );
  }

  componentDidMount() {
    AsyncStorage.getItem("token", (err, token) => {
      console.log("result token TipsList :", token);
      axios
        .get(`${config.DOMAIN}tips/`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          console.log("response", response.data);
          this.setState({
            tips: response.data
          });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
}
