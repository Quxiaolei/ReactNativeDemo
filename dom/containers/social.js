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
        component: SocialPageList,
        title: '多彩资讯',
        passProps:{},
      }}/>
		);
	}
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexWrap:'nowrap',
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
