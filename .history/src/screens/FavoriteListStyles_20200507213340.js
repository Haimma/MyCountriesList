/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList, View, Text, Dimensions, StyleSheet } from "react-native";
import CountryListItem from "./CountryListItem";

class FavoriteList extends Component {
  renderItem({item}) {
    return <CountryListItem country={item} />;
  }

  render() {
    const { labelStyle, containerStyle, flatStyle } = styles;
    const favorite = this.props.countriesLists.favorite;
    if (favorite.length === 0) {
      return (
        <View style={containerStyle}>
          <Text style={labelStyle}>You Favorite List Is Empty.</Text>
        </View>
      );
    }
    return (
      <View style={flatStyle}>
        <FlatList
          data={favorite}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={(i) => i}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countriesLists: state.countriesLists,
  };
};

export default connect(mapStateToProps)(FavoriteList);

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
