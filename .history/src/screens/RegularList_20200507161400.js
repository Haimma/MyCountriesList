/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Dimensions, Text, StyleSheet } from 'react-native';
import ListItem from './ListItem';
import { CardSection, Input } from '../components/common';

class RegularList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            searchResult: [],
        };
      }

    SearchFilter({ value }) {
        const countires = this.props.countriesLists.all;

        const newData = countires.filter(function(item) {
            const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            const textData = value.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
    
        this.setState({
            searchResult: newData,
            input: value,
        });
    }

    
    renderItem(country) {
        return <ListItem
            country = {country.item}
            />
    }

    renderList() {

    }

    renderHeader() {
        const { searchStyle} = styles;
        return (
            <View>
                <CardSection style={searchStyle} >
                    <Input
                        placeholder = 'Search...'
                        value = {this.state.input}
                        onChangeText = {value => value.length >= 2 ? this.SearchFilter({ value }) : this.setState({input: value})}
                    />
                </CardSection>
            </View>
        );
    }

    render() {

    }
}

const mapStateToProps = state => {
    return  {
        countriesLists: state.countriesLists,
    };
};

export default connect(mapStateToProps)(RegularList);

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    searchStyle: {

        flex:1
    },
    labelStyle: {
        fontSize: 24,
        flex: 1,
        color: '#000',
        paddingLeft: 20,
        lineHeight: 23,
    },
    containerStyle: {
        marginTop: 0.06 * height,
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
})