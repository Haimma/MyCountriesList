/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList, View, Dimensions, Text, StyleSheet } from "react-native";
import CountryListItem from "./CountryListItem";
import { CardSection, Input } from "../components";


export default connect(mapStateToProps)(CountryList);

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  searchStyle: {
    flex: 1,
  },
  labelStyle: {
    fontSize: 24,
    flex: 1,
    color: "#000",
    paddingLeft: 20,
    lineHeight: 23,
  },
  containerStyle: {
    marginTop: 0.06 * height,
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
