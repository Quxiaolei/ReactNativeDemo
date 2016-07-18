'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  NavigatorIOS,
  Image,
  Text,
} from 'react-native';

class SocialDetailPage extends Component {
  render() {
    var book =
    // this.props.book;
    {volumeInfo: {title: 'The Catcher in the Rye1', authors: "J. D. Salinger", imageLinks: {thumbnail: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1506930986,2736628476&fm=21&gp=0.jpg'}}};
    var imageURI = (typeof book.volumeInfo.imageLinks !== 'undefined') ? book.volumeInfo.imageLinks.thumbnail : '';
    var title = (typeof book.volumeInfo.title !== 'undefined') ? book.volumeInfo.title : '我就是描述';
		return(
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: imageURI}} />
        <Text style={styles.description}>{title}</Text>
      </View>
			);
  }
}

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


export default SocialDetailPage;
