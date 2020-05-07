/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { TextInput, View, Text, Dimensions, StyleSheet } from 'react-native';

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
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
    labelStyle: {
        fontSize: 18,
        paddingRight: 20,
        flex: 1,
    },
    containerStyle: {
        marginTop: 0.06 * height,
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export { Input };