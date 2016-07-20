import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  Dimensions,
  Text,
  View,
  Alert,
  TouchableHighlight,
  Platform,
} from 'react-native';

var SocialChannelPage = React.createClass({
  _toggleChannel(tag){
    var title = tag == 1 ? '点击了发现频道':'点击关注频道';
    console.log(title);
    Alert.alert(
    title,
    null,
    [{text: 'OK', onPress: () => console.log('OK Pressed!')},])
  },
	render:function(){
		return(
      <View style = {styles.container}>
        <TouchableHighlight onPress={() =>
          this._toggleChannel(1)}>
          <View style = {styles.view}>
            <Text style = {styles.text}> 发现 </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() =>
          this._toggleChannel(2)}>
          <View style = {styles.view}>
  		      <Text style = {styles.text}> 关注 </Text>
          </View>
        </TouchableHighlight>
      </View>
			)
	}
});

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap:'nowrap',
    justifyContent: 'space-between',//主轴元素对齐方式
    alignItems: 'center',//交叉轴元素对齐方式
    backgroundColor: '#FFF8DC',
    marginTop:(Platform.OS === 'android' ? 0 : 20),
    width: Dimensions.get('window').width,
	  // height:40,
  },
  view:{
    flexDirection: 'column',
    justifyContent: 'center',//主轴元素对齐方式
    backgroundColor: '#FF4500',
    height:30,
  },
  text:{
	// flex:1,
	// justifyContent:'center',
  fontSize:17,
	textAlign:'center',
	// alignItems:'center',
	// backgroundColor: '#DAA520',
	width: Dimensions.get('window').width/2 - 1,
  // height:30,
  // marginTop:80,
	// marginRight:10,
	// height:40,
	},
});

module.exports = SocialChannelPage;
