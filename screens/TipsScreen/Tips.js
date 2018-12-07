import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Picker
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import styles from "./styles";
// import TipsList from "./screens/TipsScreen/TipsList";

export default class Tips extends React.Component {
  constructor(props) {
    super(props);

    this.inputRefs = {};

    this.state = {
      favpays: undefined,
      items: [
        {
          label: "France",
          value: "france"
        },
        {
          label: "Bénin",
          value: "bénin"
        },
        {
          label: "Royaume-Uni",
          value: "royaume-uni"
        }
      ],
      favville: undefined,
      items2: [
        {
          label: "Paris",
          value: "paris"
        },
        {
          label: "Cotonou",
          value: "cotonou"
        },
        {
          label: "Londres",
          value: "londres"
        }
      ]
    };
  }

  render() {
    const _renderItem = ({ item }) => <Text>{item.name}</Text>;
    const sampleData = [
      {
        name: { nom: "", prenom: "" },
        rate: "",
        value: "",
        city: "",
        adress: "",
        price: ""
      }
    ];
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TIPS</Text>
        <View style={styles.button}>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text> All </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text> Sleep </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text> Eat </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text> See </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text> More</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: 5 }} />
        {/* <Text style={{ textAlign: "center" }}>Pays</Text> */}
        <RNPickerSelect
          placeholder={{
            label: "Choisis un pays",
            value: null
          }}
          items={this.state.items}
          onValueChange={value => {
            this.setState({
              pays: value
            });
          }}
          onUpArrow={() => {
            this.inputRefs.name.focus();
          }}
          onDownArrow={() => {
            this.inputRefs.picker2.togglePicker();
          }}
          style={[styles.pickerSelectStyles]}
          value={this.state.favpays}
          ref={el => {
            this.inputRefs.picker = el;
          }}
        />
        <View style={{ paddingVertical: 5 }} />

        {/* <Text style={{ textAlign: "center" }}>Ville</Text> */}
        <RNPickerSelect
          placeholder={{
            label: "Choisis une ville...",
            value: null
          }}
          items={this.state.items2}
          onValueChange={value => {
            this.setState({
              ville: value
            });
          }}
          onUpArrow={() => {
            i;
            this.inputRefs.picker.togglePicker();
          }}
          onDownArrow={() => {
            this.inputRefs.company.focus();
          }}
          style={[styles.pickerSelectStyles]}
          value={this.state.ville}
          ref={el => {
            this.inputRefs.picker2 = el;
          }}
        />
        <View style={{ paddingVertical: 10 }} />
        <View style={styles.tips}>
          {/* <TipsList data={sampleData} /> */}
          <Text style={styles.tipscontainer}>DONNEES TIPS</Text>
        </View>
      </View>
    );
  }
}
