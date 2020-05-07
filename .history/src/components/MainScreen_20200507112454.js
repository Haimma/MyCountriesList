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
import { CardSection } from './common';


class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            isConnected: false,
        };
      }

    componentDidMount() {
        const unsubscribe = NetInfo.addEventListener(state => {
            console.log("Is connected?", state.isConnected);
            if(state.isConnected) {
                this.setState({ isConnected: true },
                    () => {
                    this.props.CountryListFetch().then(() => {
                        console.log(this.props.countriesLists);
                        // this.props.FavoriteListFetch();
                    });
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
    <ScrollView tabLabel="ios-paper" style={styles.tabView}>
      <View style={styles.card}>
        <Text>News</Text>
      </View>
    </ScrollView>
    <ScrollView tabLabel="ios-people" style={styles.tabView}>
      <View style={styles.card}>
        <Text>Friends</Text>
      </View>
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
    tabView: {
      flex: 1,
      padding: 10,
      backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
      borderWidth: 1,
      backgroundColor: '#fff',
      borderColor: 'rgba(0,0,0,0.1)',
      margin: 5,
      height: 150,
      padding: 15,
      shadowColor: '#ccc',
      shadowOffset: { width: 2, height: 2, },
      shadowOpacity: 0.5,
      shadowRadius: 3,
    },
  });