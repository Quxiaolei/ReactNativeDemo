'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import SocialChannel from './social_channel'
import SocialListView from './social_list_listView'

class HomePageList extends Component {

	render() {
		return (
      <View>
        <SocialChannel style = {styles.channelView} />
        <SocialListView />
      </View>
		  //   <View style = {styles.container}>
		  //   <Text style = {styles.description}>
      //   首页
		  //   </Text>
			// </View>
		);
	}
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap:'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4500',
	// height: 100,
	// marginTop:20,
	// width: 200,
  },
  channelView:{
    marginTop:-50,
  },
});

module.exports = HomePageList;
