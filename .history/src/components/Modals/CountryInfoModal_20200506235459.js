/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from "react";
import { Text, View, Modal, StyleSheet } from "react-native";
import { Button, CardSection, Card } from "../common";
import { SvgUri } from "react-native-svg";

const CountryInfoModal = ({
  children,
  visible,
  onUpdate,
  onClose,
  countryIn,
}) => {
  const {
    containerStyle,
    leftTextStyle,
    rightTextStyle,
    cardSectionStyle,
    image,
    imageContainer,
  } = styles;
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <View style={imageContainer}>
          <SvgUri width="100%" height="100%" uri={children.flag} />
        </View>
        <CardSection style={cardSectionStyle}>
          <Text style={leftTextStyle}>Name: {children.name}</Text>
          <Text style={rightTextStyle}>Native Name: {children.nativeName}</Text>
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <Text style={leftTextStyle}>Capital: {children.capital}</Text>
          <Text style={rightTextStyle}>Population: {children.population}</Text>
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <Text style={leftTextStyle}>Time Zone: {children.timezones}</Text>
          <Text style={rightTextStyle}>Languages: {children.timezones}</Text>
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <Button onPress={onUpdate}>{countryIn ? "Add" : "Delete"}</Button>
          <Button onPress={onClose}>Close</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  cardSectionStyle: {
    flex: 1,
    justifyContent: "center",
  },
  containerStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    // width: 60,
    // height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'yellow'
  },

  leftTextStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20,
    lineHeight: 40,
  },
  rightTextStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20,
    lineHeight: 40,
  },
});

export { CountryInfoModal };