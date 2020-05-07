/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList, View, Text, Dimensions, StyleSheet } from "react-native";
import CountryListItem from "./CountryListItem";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
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
  flatStyle: {
    marginTop: 0.06 * height,
  },
});
