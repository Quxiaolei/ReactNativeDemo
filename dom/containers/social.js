/**
 * 圈子主界面
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  AlertIOS,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
} from 'react-native';

import SocialPageList from '../components/social_list'
import SocialDetailView from '../components/social_detail'

const defaultRoute = {
  component: SocialPageList
};

export default class SocialPage extends Component {
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
                title:'多彩资讯',
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
            <Text style={styles.buttonText}>{route.title ? route.title : '多彩资讯'}</Text>
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
    // flexWrap:'nowrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  description: {
    fontSize: 20,
    backgroundColor: 'white'
    },
});
