/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { TextInput, View} from 'react-native';
import {styles} from './CardStyles';

const Input = ({  value, onChangeText, placeholder, editable }) => {
    const {inputStyle,  containerStyle} = styles;

    return (
        <View style={containerStyle}>
            <TextInput
                placeholder = {placeholder}
                autoCorrect = {false}
                style = {inputStyle}
                value = {value}
                onChangeText = {onChangeText}
                editable = {editable}
            />
        </View>
    );

};

export { Input };