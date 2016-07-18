'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  NavigatorIOS
} from 'react-native';

import WealthPageList from '../components/wealth_list'

class WealthPage extends Component {

	render() {
		return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
        title: '财富管家',
        component: WealthPageList
      }}/>
		);
	}
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#FF4500',
    // height: 100,
	  // marginTop:20,
    // width: 200,
  },
  description: {
    fontSize: 20,
    backgroundColor: 'white'
    },
});

module.exports = WealthPage;
