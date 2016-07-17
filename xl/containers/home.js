'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  // NavigatorIOS
  Navigator,
} from 'react-native';

import HomePageList from '../components/home_list'

class HomePage extends Component {

	render() {
		return (
      <Navigator
        initialRoute={{name: 'My First Scene', index: 0}}
        renderScene={(route, navigator) =>
          <HomePageList
          name={route.name}
          onForward={() => {
          var nextIndex = route.index + 1;
          navigator.push({
            name: 'Scene ' + nextIndex,
            index: nextIndex,
          });
        }}
        onBack={() => {
          if (route.index > 0) {
            navigator.pop();
          }
        }}
        />
      }
      />
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

module.exports = HomePage;
