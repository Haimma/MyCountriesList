/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text, Dimensions} from 'react-native';
import RegularListItem from './RegularListItem';

class FavoriteList extends Component {

    renderItem(country, all) {
        console.log('country');
        console.log(country.item);

        let item = all.find(element => element > 10)
        console.log(item);
        return <RegularListItem
            country = {item}
            />
    }

    render() {
        const {labelStyle,  containerStyle, flatStyle} = styles;
        const all = this.props.countriesLists.all;
        const favorite = this.props.countriesLists.favorite;
        console.log(all);
        console.log(favorite);
        if (favorite.length === 0) {
            return (
                <View style={containerStyle}>
                    <Text style={labelStyle}> 
                        You Favorite List Is Empty.
                    </Text>
                </View>
            )
        }
        return (
            <View style={flatStyle}>
                <FlatList 
                    data = {favorite}
                    renderItem={(country) => this.renderItem(country, all)}
                    keyExtractor={(country) => country}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return  {
        countriesLists: state.countriesLists,
    };
};

export default connect(mapStateToProps)(FavoriteList);

const {height} = Dimensions.get('window');

const styles = {
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
    },
    flatStyle: {
        marginTop: 0.06 * height,
    }
}