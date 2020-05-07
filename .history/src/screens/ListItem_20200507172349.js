/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Dimensions,  StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { CountryUpdate } from '../actions';

import { Card, CardSection, Button } from '../components/common';
import { CountryInfoModal } from '../components/Modals/CountryInfoModal';

class ListItem extends Component {
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

    onUpdatePress() {
        this.props.CountryUpdate({country: this.props.country.name, favorite: this.props.countriesLists.favorite });
    }

    render() {
        const { card, photoDescriptionContainer, title, subTitle } = styles;
        const country = this.props.country;
        const favorite = this.props.countriesLists.favorite;
        let countryIn = favorite.indexOf(country.name) < 0;
        return (
            // <View
            //     style={card}
            // >
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
                        onUpdate = {this.onUpdatePress.bind(this)}
                        onClose = {() => this.setState({ showCountryInfoModal: false})}
                        countryIn = {countryIn}
                    >
                        {country}
                    </CountryInfoModal>
                        <Button onPress = {this.onUpdatePress.bind(this)}>{countryIn ? 'Add' : 'Delete'}</Button>
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

export default connect(mapStateToProps, {CountryUpdate})(ListItem);

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    imageStyle: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
        width: 30,
        height: 20,
    },
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    },
    subTitleStyle: {
        fontSize: 14,
        paddingLeft: 15,
    },
    card: {
        height: height / 7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 2,
    },
    image: {
        borderRadius: 5,
        flex: 1,
        width: '100%',
    },
    photoDescriptionContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        flexDirection: 'column',
        height: '100%',
        position: 'absolute',
        left: 10,
        bottom: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontFamily: 'Avenir',
        textShadowColor: 'black',
        textShadowRadius: 10,
    },
    subTitle: {
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
        fontFamily: 'Avenir',
        textShadowColor: 'black',
        textShadowRadius: 10,
    },
})
