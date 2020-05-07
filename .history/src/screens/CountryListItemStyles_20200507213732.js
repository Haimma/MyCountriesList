/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Dimensions,  StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { CountryUpdate } from '../actions';

export default connect(mapStateToProps, {CountryUpdate})(CountryListItem);

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
