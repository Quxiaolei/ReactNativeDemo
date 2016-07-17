'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class MePageList extends Component {

	render() {
		return (
		    <View style = {styles.container}>
		    <Text style = {styles.description}>
        我的
		    </Text>
			</View>
		);
	}
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA500',
	// height: 100,
	// marginTop:20,
	// width: 200,
  },
  description: {
    fontSize: 20,
    backgroundColor: 'white'
    },
});

module.exports = MePageList;
