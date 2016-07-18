'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
} from 'react-native';

class CommonNavigationBar extends Component {

  // let routeMapper = {
  //   LeftButton(route, navigator, index, navState) {
  //     if(index > 0) {
  //       return (
  //         <TouchableOpacity
  //           onPress={() => navigator.pop()}
  //           style={styles.button}>
  //           <Text style={styles.buttonText}>Back</Text>
  //         </TouchableOpacity>
  //       );
  //     } else {
  //       return (
  //         <TouchableOpacity
  //           onPress={() => navigator.pop()}
  //           style={styles.button}>
  //           <Text style={styles.buttonText}>按钮</Text>
  //         </TouchableOpacity>
  //       );
  //     }
  //   },
  //   RightButton(route, navigator, index, navState) {
  //     if(index > 0 && route.rightButton) {
  //       return (
  //         <TouchableOpacity
  //           onPress={() => navigator.push({
  //             component: HomePageList,
  //           })}
  //           style={styles.button}>
  //           <Text style={styles.buttonText}>Next</Text>
  //           </TouchableOpacity>
  //         );
  //     } else {
  //       return (
  //         <TouchableOpacity
  //           onPress={() => navigator.push({
  //             component: HomePageList,
  //           })}
  //           style={styles.button}>
  //           <Text style={styles.buttonText}>详情</Text>
  //         </TouchableOpacity>
  //       );
  //     }
  //   },
  //   Title(route, navigator, index, navState) {
  //     return (
  //       <View style={styles.title}>
  //         <Text style={styles.buttonText}>{route.title ? route.title : '首页'}</Text>
  //       </View>
  //     );
  //   }
  // };

  render() {
		return (
      <Navigator.NavigationBar
        style={styles.navStyle}
        routeMapper={{
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
                    component: HomePageList,
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
        }}
      />
		);
	}
}

var styles = StyleSheet.create({
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '400'
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
});

module.exports = CommonNavigationBar;
