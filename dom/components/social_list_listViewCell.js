'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';

var FAKE_BOOK_DATA = [{
    volumeInfo: {
    title: 'The Catcher in the Rye',
    authors: "J. D. Salinger",
    imageLinks: {
      thumbnail: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1506930986,2736628476&fm=21&gp=0.jpg'
    }
  }
}];

class ListViewCell extends Component {

	render() {
    var book = FAKE_BOOK_DATA[0];
		return (
      <View style={styles.container}>
        <Image source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                style={styles.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{book.volumeInfo.title}</Text>
          <Text style={styles.author}>{book.volumeInfo.authors}</Text>
        </View>
      </View>
		);
	}
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF4500',
        padding: 10,
        width:Dimensions.get('window').width,
        height:80,
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    author: {
        color: '#656565'
    }
});

module.exports = ListViewCell;
