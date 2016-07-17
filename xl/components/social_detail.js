import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  View
} from 'react-native';


var SocialDetailPage = React.createClass({
	render:function(){
    var book = this.props.book;
    var imageURI = (typeof book.volumeInfo.imageLinks !== 'undefined') ? book.volumeInfo.imageLinks.thumbnail : '';
    var description = (typeof book.volumeInfo.description !== 'undefined') ? book.volumeInfo.description : '';
		return(
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: imageURI}} />
        <Text style={styles.description}>{description}</Text>
      </View>
			);
	},
	// goTo:function(){
	// 	this.props.navigator.push({
	// 		component:SocialPage,
	// 		title:'多彩资讯1',
	// 	});
	// }
});

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    alignItems: 'center'
  },
  image: {
    width: 107,
    height: 165,
    padding: 10
  },
  description: {
    padding: 10,
    fontSize: 15,
    color: '#656565'
  }
  // box: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#FF0000',
	// height: 100,
	// width: 200,
  // },
});

module.exports = SocialDetailPage;
