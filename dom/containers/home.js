'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
} from 'react-native';

import HomePageList from '../components/social_list'
import SocialDetailView from '../components/social_detail'

import CommonNavigationBar from './commonNavBar'

const defaultRoute = {
  component: HomePageList
};

class HomePage extends Component {

  _renderScene(route, navigator) {
    let Component = route.component;
    return (
      <Component {...route.params} navigator={navigator} />
    );
  }

  _renderNavBar() {
    const styles = {
      title: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
      },
      button: {
        flex: 1, width: 50, alignItems: 'center', justifyContent: 'center'
      },
      buttonText: {
        fontSize: 17, color: '#333300', fontWeight: '400'
      },
      navStyle:{
        alignItems: 'center',
        backgroundColor: '#FFFAFA',
        shadowOffset:{
            width: 0.5,
            height: 0.5,
        },
        // shadowColor: '#000000',
        // shadowOpacity: 0.8,
      }
    }
    var routeMapper = {
      LeftButton(route, navigator, index, navState) {
        if(index > 0) { //返回上一级
          return (
            <TouchableOpacity
              onPress={() => navigator.pop()}
              style={styles.button}>
              <Text style={styles.buttonText}>返回</Text>
            </TouchableOpacity>
          );
        } else {  //到达栈底
          return (
            <TouchableOpacity
              onPress={() => navigator.pop()}
              style={styles.button}>
              <Text style={styles.buttonText}>按钮</Text>
            </TouchableOpacity>
          );
        }
      },
      RightButton(route, navigator, index, navState) {
        if(index > 0 && route.rightButton) {
          return (
            <TouchableOpacity
              onPress={() => navigator.push({
                component: HomePageList,
                title:'首页',
              })}
              style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity
              onPress={() => navigator.push({
                component: SocialDetailView,
                title:'详情页',
              })}
              style={styles.button}>
              <Text style={styles.buttonText}>详情</Text>
            </TouchableOpacity>
          );
        }

      },
      Title(route, navigator, index, navState) {
        return (
          <View style={styles.title}>
            <Text style={styles.buttonText}>{route.title ? route.title : '首页'}</Text>
          </View>
        );
      }
    };
    return (
      <Navigator.NavigationBar
        style={styles.navStyle}
        routeMapper={routeMapper}
      />
    );
  }

  render() {
    return (
      <Navigator
      initialRoute= {defaultRoute}
      configureScene= {(route) => Navigator.SceneConfigs.PushFromRight}
      renderScene= {this._renderScene}
      sceneStyle={{paddingTop: (Platform.OS === 'android' ? 64 : 44)}}
      navigationBar =
        // { <CommonNavigationBar />}
        {this._renderNavBar()}
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
