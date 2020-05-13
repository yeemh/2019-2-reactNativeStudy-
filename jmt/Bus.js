import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";
//import { ListItem } from "react-native-elements";
import PropTypes from "prop-types";
import Data from "./Data";

const busOptions = {
  "234000016": {
    busName: "1112"
  },
  "200000112": {
    busName: "7000"
  },
  "200000115": {
    busName: "5100"
  },
  "200000103": {
    busName: "9"
  }
};

export default function Bus({ info }) {
  return (
    <View style={styles.container}>
      <Text>{busOptions[info[0].routeId[0]].busName}</Text>
      <Text>
        도착예정: {info[0].predictTime1[0]}분({info[0].locationNo1[0]}
        정류장), {info[0].predictTime2[0]}분({info[0].locationNo2[0]}
        정류장)
      </Text>
      <Text>{busOptions[info[1].routeId[0]].busName}</Text>
      <Text>
        도착예정: {info[1].predictTime1[0]}분({info[0].locationNo1[0]}
        정류장), {info[1].predictTime2[0]}분({info[0].locationNo2[0]}
        정류장)
      </Text>
      <Text>{busOptions[info[2].routeId[0]].busName}</Text>
      <Text>
        도착예정: {info[2].predictTime1[0]}분({info[0].locationNo1[0]}
        정류장), {info[2].predictTime2[0]}분({info[0].locationNo2[0]}
        정류장)
      </Text>
      <Text>{busOptions[info[3].routeId[0]].busName}</Text>
      <Text>
        도착예정: {info[3].predictTime1[0]}분({info[0].locationNo1[0]}
        정류장), {info[3].predictTime2[0]}분({info[0].locationNo2[0]}
        정류장)
      </Text>
    </View>
  );
}

Bus.PropTypes = {
  busName: PropTypes.oneOf(["234000016", "200000112", "200000115", "200000103"])
    .isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
