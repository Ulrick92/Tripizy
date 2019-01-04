import React from "react";
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { withNavigation } from "react-navigation";
import StarRating from "react-native-star-rating";
import { Rating } from "react-native-elements";
import axios from "axios";
import config from "../config";

class TipsCard extends React.Component {
  state = {
    tip: {},
    mounted: false
  };

  renderTipsPictures = () => {
    if (this.state.mounted && this.state.tip.photos.length > 0) {
      return (
        <Image
          style={styles.pictures}
          source={{ uri: this.state.tip.photos[0] }}
        />
      );
    } else {
      return (
        <View>
          <Image
            style={styles.pictures}
            source={require("../assets/images/Travel_book.png")}
          />
        </View>
      );
    }
  };

  renderTipsRating = () => {
    if (this.state.mounted && this.state.tip.rate.length > 0) {
      const rating = Number(this.state.tip.rate[0]);
      return (
        <Rating
          ratingBackgroundColor="#a9ceca"
          imageSize={18}
          type="heart"
          readonly
          startingValue={rating}
        />
      );
    } else {
      return null;
    }
  };

  renderProfilePic(user_id) {
    if (user_id) {
      if (user_id.profile_pic && user_id.profile_pic.length) {
        return { uri: user_id.profile_pic[0] };
      } else {
        return require("../assets/images/no_user.png");
      }
    }
  }

  render() {
    const { user_id } = this.props;
    return (
      <View style={styles.tipsCard}>
        <View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              margin: 5,
              borderRadius: 10,
              shadowOpacity: 5,
              height: 45
            }}
          >
            <View>
              <TouchableOpacity>
                <ImageBackground
                  style={{
                    width: 45,
                    height: 45,
                    position: "absolute",
                    bottom: 154,
                    left: -10
                  }}
                  imageStyle={{
                    borderRadius: 45 / 2,
                    borderWidth: 1,
                    borderColor: "white",
                    shadowOpacity: 20
                  }}
                  source={this.renderProfilePic(user_id)}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: "flex-end",
                width: "20%",
                justifyContent: "center"
              }}
            >
              <FontAwesomeIcon name="hotel" size={22} color="black" />
              <Text style={{ fontFamily: "Arial", fontSize: 10 }}>
                {this.state.tip.category}
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                width: "50%"
              }}
            >
              <Text
                style={{ fontSize: 18, marginLeft: 12, fontWeight: "bold" }}
                numberOfLines={1}
              >
                {this.state.tip.company_name}
              </Text>
              <Text style={{ fontSize: 14, marginLeft: 12, color: "grey" }}>
                {this.state.tip.city}
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                borderRadius: 5,
                alignItems: "center",
                width: "30%"
              }}
            >
              {this.renderTipsRating()}

              <Text />
            </View>
          </View>

          <Text style={{ marginBottom: 10 }} numberOfLines={2}>
            {this.state.tip.description}
          </Text>
          <View style={{ flexDirection: "row" }}>
            {this.renderTipsPictures()}
          </View>
        </View>
      </View>
    );
  }
  componentDidMount() {
    AsyncStorage.getItem("token", (err, token) => {
      // console.log("BLOUBLOU :", this.props);
      // console.log("thips.props, ", `${config.DOMAIN}tips/${this.props.id}`);
      axios
        .get(`${config.DOMAIN}tips/${this.props.id}`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          this.setState({
            tip: response.data,
            mounted: true
          });
        })
        .catch(err => {
          console.log("error tipscard didmount:", err.message);
        });
    });
  }
}

const styles = StyleSheet.create({
  tipsCard: {
    // borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    flex: 1,
    flexDirection: "row",
    margin: 5,
    shadowOpacity: 20,
    backgroundColor: "#EAE1E2"
  },
  pictures: {
    width: 80,
    height: 80,
    justifyContent: "flex-end",
    shadowOpacity: 50,
    borderRadius: 10,
    marginRight: 5
  }
});

export default withNavigation(TipsCard);
