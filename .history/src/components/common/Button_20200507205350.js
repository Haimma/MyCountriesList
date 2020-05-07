/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet } from 'react-native';
import {styles} from './ButtonStyles';

const Button = ({onPress, children}) => {

    return(
        <TouchableOpacity onPress = {onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export {Button};