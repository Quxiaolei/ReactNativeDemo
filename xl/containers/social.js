'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
  AlertIOS
} from 'react-native';
import SocialPageList from '../components/social_list'

class SocialPage extends Component {

	render() {
		return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
        title: '多彩资讯',
        component: SocialPageList
      }}/>
		);
	}
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'flex-start',
    // backgroundColor: '#FF4500',
    // height: 100,
	  // marginTop:20,
    // width: 200,
  },
});

module.exports = SocialPage;
