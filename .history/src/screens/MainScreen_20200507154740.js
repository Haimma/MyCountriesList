/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {StyleSheet, ScrollView, Dimensions, View, Text} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view-universal';

import { CountryListFetch, FavoriteListFetch } from '../actions';

import FavoriteList from './FavoriteList';
import RegularList from './RegularList';


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
                this.setState({ isConnected: true },
                    () => {
                    this.props.CountryListFetch();
                })
            }
          });

    }
    

    render() {
        const {labelStyle,  containerStyle, tabStyle, subLabelStyle} = styles;

        if (!this.state.isConnected) {
            return (
                <View style={containerStyle}>
                    {/* <View>
                        <Text style={labelStyle}> 
                            Countries App
                        </Text>
                    </View> */}
                    <View>
                        <Text style={subLabelStyle}> 
                            Please Check your Internet Connection...
                        </Text>
                    </View>
                </View>
            );
        }
        return (
            <ScrollableTabView
            style={tabStyle}
            renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
            tabBarPosition='overlayTop'
            initialPage={this.state.index}
            onChangeTab={this.handleChangeScreen}
            >
                <ScrollView tabLabel='Countries List'>
                    <RegularList/>
                </ScrollView>
                <ScrollView tabLabel='Favorites'>
                    <FavoriteList/>
                </ScrollView>
            </ScrollableTabView>
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
    subLabelStyle: {
        fontSize: 20,
        flex: 1,
        color: '#000',
        paddingLeft: 20,
        lineHeight: 23,
    },
    containerStyle: {
        marginTop: 0.06 * height,
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    tabStyle: {
      marginTop: 30,
    },
    icon: {
      width: 300,
      height: 300,
      alignSelf: 'center',
    },
  });