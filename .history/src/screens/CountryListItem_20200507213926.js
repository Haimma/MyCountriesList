/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Dimensions,  StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { CountryUpdate } from '../actions';
import {styles} from './CountryListItemStyles';

import { Card, CardSection, Button } from '../components/';
import { CountryInfoModal } from '../components/Modals/CountryInfoModal';

class CountryListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCountryInfoModal: false,
        };
    }

    onInfoPress() {
        this.setState({
            showCountryInfoModal: !this.state.showCountryInfoModal,
        });
    }


    render() {
        const { card, photoDescriptionContainer, title, subTitle } = styles;
        const country = this.props.country;
        const favorite = this.props.countriesLists.favorite;
        let countryIn = favorite.find(
            (c) => c.alpha2Code === country.alpha2Code)
        return (
           
            <Card>
                {/* <SvgUri 
                uri={ country.flag }
                > */}
                {/* <View style={photoDescriptionContainer}> */}

                    <CardSection>
                        <Text style={title}>Country: {country.name}</Text>
                    </CardSection>
                    <CardSection>
                        <Text style={subTitle}>Capital: {country.capital}</Text>
                    </CardSection>
                    <CardSection>
                        <Text style={subTitle}>Time Zones: {country.timezones}</Text>
                    </CardSection>
                    <CardSection>
                        <Button  onPress = {this.onInfoPress.bind(this)}>info</Button>
                    <CountryInfoModal
                        visible = {this.state.showCountryInfoModal}
                        onUpdate = {()=>{this.props.CountryUpdate(country)}}
                        onClose = {() => this.setState({ showCountryInfoModal: false})}
                        countryIn = {!countryIn}
                    >
                        {country}
                    </CountryInfoModal>
                        <Button onPress = {()=>{this.props.CountryUpdate(country)}}>{countryIn ? 'Delete' : 'Add'}</Button>
                    </CardSection>
                {/* </SvgUri> */}
                {/* </View> */}
            </Card>


            // </View>
        );
    }
}
const mapStateToProps = state => {
    return  {
        countriesLists: state.countriesLists,
    };
};

export default connect(mapStateToProps, {CountryUpdate})(CountryListItem);