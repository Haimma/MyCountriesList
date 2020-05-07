/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, ScrollView, Dimensions, View, Text } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import ScrollableTabView, {
  DefaultTabBar,
} from "react-native-scrollable-tab-view-universal";

import { CountryListFetch, FavoriteListFetch } from "../actions";

import FavoriteList from "./FavoriteList";
import CountryList from "./CountryList";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 24,
    flex: 1,
    color: "#000",
    alignItems: "center",
    lineHeight: 23,
  },
  containerStyle: {
    marginTop: 0.06 * height,
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  tabStyle: {
    marginTop: 30,
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
});
