/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';


const CardSection = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>{/* use the left but if there is someting on the right use it*/}
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderButtomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    },
};

export  {CardSection};