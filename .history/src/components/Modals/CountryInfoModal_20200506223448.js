/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Modal } from 'react-native';
import { Button, CardSection, Card } from '../common';
import { SvgUri } from 'react-native-svg';

const CountryInfoModal = ({ children, visible, onUpdate, onClose, countryIn }) => {
    const { containerStyle, leftTextStyle, rightTextStyle, cardSectionStyle, image, imageContainer } = styles;
    return (
        <Modal
            visible = {visible}
            transparent
            animationType = 'fade'
            onRequestClose = {() => {}}
        >
            <View style = { containerStyle }>
                <CardSection style = { cardSectionStyle }>
                    <SvgUri 
                        style={image}
                        uri={ children.flag }
                        resizeMode="cover"
                    />
                </CardSection>
                <CardSection style = { cardSectionStyle }>
                    <Text style = { leftTextStyle }>
                        Name: {children.name}
                    </Text>
                    <Text style = { rightTextStyle }>
                        Native Name: {children.nativeName}
                    </Text>
                </CardSection>
                {/* flag
languages[].name */}
                <CardSection style = { cardSectionStyle }>
                    <Text style = { leftTextStyle }>
                        Capital: {children.capital}
                    </Text> 
                    <Text style = { rightTextStyle }>
                        Population: {children.population} 
                    </Text> 
                </CardSection>
                <CardSection style = { cardSectionStyle }>
                    <Text style = { leftTextStyle }>
                        Time Zone: {children.timezones}
                    </Text> 
                    <Text style = { rightTextStyle }>
                        Languages: {children.timezones}
                    </Text>
                </CardSection>
                <CardSection style = { cardSectionStyle }>
                    <Button onPress = { onUpdate }>Update</Button>
                    <Button onPress = { onClose }>Close</Button>
                </CardSection>
            </View>
        </Modal>

    );

};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    imageContainer: {
        // translateY: -43,
        // alignSelf: 'center',
        // borderRadius: 64,
        // flex: 1,
        // width: 50,
        // height: 50,
    },
    image: {
        // height:128,
        // width: 128,
        // borderRadius: 64,
        // flex: 1,
        // width: 50,
        // height: 50,
        // resizeMode: 'contain',
        // // width: 150,
        // // height: 150,
        // borderRadius: 150 / 2,
        // overflow: "hidden",
        // borderWidth: 3,
        // borderColor: "red",
        // alignSelf: 'center',
        // justifyContent: 'center',
        // height: 30,
        // width: 30,
        width: 400,
        height: 400,
        borderRadius: 400/ 2
    },
    leftTextStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20,
        lineHeight: 40
    },
    rightTextStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20,
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

export { CountryInfoModal };