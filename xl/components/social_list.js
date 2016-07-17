'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';

import SocialChannel from './social_channel'
import SocialListView from './social_list_listView'
import SocialListViewCell from './social_list_listViewCell'

class SocialPageList extends Component {

	render() {
		return (
      <View style = {styles.container}>
      <SocialChannel style = {styles.channelView} />
      <SocialListView style = {styles.listView} />
      </View>
		);
	}
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap:'nowrap',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FDF5E6',
    width: Dimensions.get('window').width,
	  // height: 100,
	  // marginTop:20,
    // width: 200,
  },
  channelView:{
    // height:50,
  },
  listView:{
    // marginTop:64+40,
  },
});

module.exports = SocialPageList;
