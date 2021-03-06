/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList, View, Text } from "react-native";
import CountryListItem from "./CountryListItem";
import { CardSection, Input } from "../components";
import {styles} from './CountryListStyles';

class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      searchResult: [],
    };
  }

  searchFilter(value) {
    const countries = this.props.countriesLists.all;
    const tempCountries = countries.filter(
      (country) => country.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    this.setState({
      searchResult: tempCountries,
      input: value,
    });
  }

  changeSearchInput(value) {
    if (value.length >= 2) this.searchFilter(value);
    else this.setState({input: value});    

  }

  renderItem(country) {
    return <CountryListItem country={country.item} />;
  }

  renderList() {
    const countries = this.props.countriesLists.all;
    if (
      this.state.searchResult.length === 0 &&
      this.state.input !== '' &&
      this.state.input.length >= 2
    ) {
      return (
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>There Is No Country With That Name.</Text>
        </View>
      );
    }
    return (
      <FlatList
        data={
          this.state.input !== '' && this.state.input.length >= 2
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
    return (
      <View>
        <CardSection style={styles.searchStyle}>
          <Input
            placeholder="Search..."
            value={this.state.input}
            onChangeText={value => this.changeSearchInput(value)}
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