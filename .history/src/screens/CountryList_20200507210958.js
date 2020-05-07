/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList, View, Dimensions, Text, StyleSheet } from "react-native";
import CountryListItem from "./CountryListItem";
import { CardSection, Input } from "../components";

class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      searchResult: [],
    };
  }

  searchFilter(value) {
    const countries = this.props.countriesLists.all;
    const tempCountries = countries.filter(
      (country) => country.name.toLowerCase().indexOf(value.toLowerCase()) != -1
    );
    this.setState({
      searchResult: tempCountries,
      input: value,
    });
  }

  changeSearchInput(value) {
    console.log(value);
    if  (value.length >= 2) {
      console.log('if')
      this.searchFilter(value);
    }
    else {
      console.log('else');
      this.setState({
        input: value,
      });    
    }
  }

  renderItem(country) {
    return <CountryListItem country={country.item} />;
  }

  renderList() {
    const countries = this.props.countriesLists.all;
    const { labelStyle, containerStyle } = styles;
    if (
      this.state.searchResult.length === 0 &&
      this.state.input !== "" &&
      this.state.input.length >= 2
    ) {
      return (
        <View style={containerStyle}>
          <Text style={labelStyle}>There Is No Country With That Name.</Text>
        </View>
      );
    }
    return (
      <FlatList
        data={
          this.state.input !== "" && this.state.input.length >= 2
            ? this.state.searchResult
            : countries
        }
        renderItem={this.renderItem}
        keyExtractor={(country) => country.alpha2Code}
        initialNumToRender={5}
      />
    );
  }

  render() {
    const { searchStyle } = styles;
    return (
      <View>
        <CardSection style={searchStyle}>
          <Input
            placeholder="Search..."
            value={this.state.input}
            onChangeText={this.changeSearchInput}
          />
        </CardSection>
        {this.renderList()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countriesLists: state.countriesLists,
  };
};

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
