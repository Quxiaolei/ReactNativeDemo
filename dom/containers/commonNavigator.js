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


// const defaultRoute = {
//   component:HomePageList
// };


module.exports = React.createClass({


// class CommonNavigator extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dataSource: new ListView.DataSource({
  //       rowHasChanged: (row1, row2) => row1 !== row2
  //     })
  //   };
  // }

  // let component = this.props.component;

  _renderScene(route, navigator) {
    let Component = route.component;
    return (
      <Component {...route.params} navigator={navigator} />
    );
  },

  _renderNavBar() {
    const styles = {
      title: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
      },
      button: {
        flex: 1, width: 50, alignItems: 'center', justifyContent: 'center'
      },
      buttonText: {
        fontSize: 17, color: '#000000', fontWeight: '400'
      },
      navStyle:{
        alignItems: 'center',
        backgroundColor: '#FFFAFA',
        shadowOffset:{
            width: 0.5,
            height: 0.5,
        },
        shadowColor: '#000000',
        shadowOpacity: 0.8,
      }
    }
    var routeMapper = {
      LeftButton(route, navigator, index, navState) {
        if(index > 0) {
          return (
            <TouchableOpacity
              onPress={() => navigator.pop()}
              style={styles.button}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          );
        } else {
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
  },

  render() {
    return (
      <Navigator
      initialRoute={{name: '', component: this.props.component, index:0}}
      // configureScene= {(route) => Navigator.SceneConfigs.FloatFromBottom}
      // HorizontalSwipeJump
      renderScene= {this._renderScene}
      sceneStyle={{paddingTop: (Platform.OS === 'android' ? 64 : 44)}}
      navigationBar ={this._renderNavBar()}
      />
    );
  }

});

// module.exports = CommonNavigator;
