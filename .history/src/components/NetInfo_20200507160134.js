/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {StyleSheet, ScrollView, Dimensions, View, Text} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view-universal';

import { CountryListFetch, FavoriteListFetch } from '../actions';


class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            isConnected: false,
        };
      }

    componentDidMount() {
        NetInfo.addEventListener(state => {
            if(state.isConnected) {
                this.setState({ isConnected: true })
            }
          });
    }
    
    render() {
        const {labelStyle,  containerStyle} = styles;
        if (!this.state.isConnected) {
            return (
                <View style={containerStyle}>
                    <View>
                        <Text style={labelStyle}>Please Check your Internet Connection...</Text>
                    </View>
                </View>
            );
        }
        return (
            
    );
  }
}
const mapStateToProps = state => {
    return  {
        countriesLists: state.countriesLists,
    };
};

export default connect(mapStateToProps, { CountryListFetch, FavoriteListFetch })(MainScreen);

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    labelStyle: {
        fontSize: 24,
        flex: 1,
        color: '#000',
        // paddingLeft: 20,
        alignItems: 'center',
        lineHeight: 23,
    },
    containerStyle: {
        marginTop: 0.06 * height,
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
  });