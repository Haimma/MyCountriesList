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
import {styles} from './MainScreenStyles';

import { CountryListFetch, FavoriteListFetch } from "../actions";

import FavoriteList from "./FavoriteList";
import CountryList from "./CountryList";

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isConnected: false,
    };
  }

  componentDidMount() {
    NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        this.setState({ isConnected: true }, () => {
          this.props.CountryListFetch();
        });
      }
    });
  }

  render() {
    if (!this.state.isConnected) {
      return (
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>
            Please Check your Internet Connection...
          </Text>
        </View>
      );
    }
    return (
      <ScrollableTabView
        style={styles.tabStyle}
        renderTabBar={() => (
          <DefaultTabBar backgroundColor="rgba(255, 255, 255, 0.7)" />
        )}
        tabBarPosition="overlayTop"
        initialPage={this.state.index}
        onChangeTab={this.handleChangeScreen}
      >
        <ScrollView tabLabel="Countries List">
          <CountryList />
        </ScrollView>
        <ScrollView tabLabel="Favorites">
          <FavoriteList />
        </ScrollView>
      </ScrollableTabView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    countriesLists: state.countriesLists,
  };
};

export default connect(mapStateToProps, {
  CountryListFetch,
  FavoriteListFetch,
})(MainScreen);
