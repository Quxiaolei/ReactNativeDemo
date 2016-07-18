'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ListView,
  TouchableHighlight,
  Alert,
} from 'react-native';

import SocialChannel from './social_channel'
import SocialListView from './social_list_listView'
import SocialListViewCell from './social_list_listViewCell'
import SocialDetailView from './social_detail'

var FAKE_BOOK_DATA1 = [
    {volumeInfo: {title: 'The Catcher in the Rye1', authors: "J. D. Salinger", imageLinks: {thumbnail: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1506930986,2736628476&fm=21&gp=0.jpg'}}}
,{volumeInfo: {title: 'The Catcher in the Rye2', authors: "J. D. Salinger", imageLinks: {thumbnail: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1506930986,2736628476&fm=21&gp=0.jpg'}}}
,{volumeInfo: {title: 'The Catcher in 33333333', authors: "J. D. Salinger", imageLinks: {thumbnail: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1506930986,2736628476&fm=21&gp=0.jpg'}}}
,{volumeInfo: {title: 'The Catcher ine444444442', authors: "J. D. Salinger", imageLinks: {thumbnail: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1506930986,2736628476&fm=21&gp=0.jpg'}}}
,{volumeInfo: {title: 'The Catcher in ye55555555555', authors: "J. D. Salinger", imageLinks: {thumbnail: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1506930986,2736628476&fm=21&gp=0.jpg'}}}
,{volumeInfo: {title: 'The Catcher in t666666666', authors: "J. D. Salinger", imageLinks: {thumbnail: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1506930986,2736628476&fm=21&gp=0.jpg'}}}
,{volumeInfo: {title: 'The Catcher in 77777777', authors: "J. D. Salinger", imageLinks: {thumbnail: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1506930986,2736628476&fm=21&gp=0.jpg'}}}
,{volumeInfo: {title: 'The Catcher in 8888888888', authors: "J. D. Salinger", imageLinks: {thumbnail: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1506930986,2736628476&fm=21&gp=0.jpg'}}}
,{volumeInfo: {title: 'The Catcher in 99999', authors: "J. D. Salinger", imageLinks: {thumbnail: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1506930986,2736628476&fm=21&gp=0.jpg'}}}
,{volumeInfo: {title: 'The Catcher in 10000', authors: "J. D. Salinger", imageLinks: {thumbnail: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1506930986,2736628476&fm=21&gp=0.jpg'}}}];

class SocialPageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }
  componentDidMount() {
    var books = FAKE_BOOK_DATA1;
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(books)
    });
   }
   _renderNews(book) {
     return (
       <TouchableHighlight onPress={() =>
         this._showNewsDetail(book)}
      //    Alert.alert(
      //    'Alert Title',
      //    'alertMessage',
      //    [{text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
      //    {text: 'OK', onPress: () => console.log('OK Pressed!')},
      //    {text: 'Other', onPress: () => console.log('Other Pressed!')},])
      //  }
                           underlayColor='#dddddd'>
         <View>
          <View style = {styles.cellContainer}>
            <View style = {{margin:10}}>
              <Image source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                    style={styles.thumbnail} />
            </View>
            <View style = {{marginTop:10,marginRight:10}}>
            <Text style={styles.title}>{book.volumeInfo.title}</Text>
            <Text style={styles.author}>{book.volumeInfo.authors}</Text>
            </View>
            </View>
         <View style={styles.separator} />
         </View>
       </TouchableHighlight>
     );
   }
   _showNewsDetail(book) {
     console.log("点击了cell,",book.volumeInfo.title,book.volumeInfo.authors);
     this.props.navigator.push({
       component: SocialDetailView,
       title: book.volumeInfo.title,
       rightButtonTitle: 'pop',
       onRightButtonPress: () => this.props.navigator.pop(),
       passProps: {book}
     });
   }

   _pop(book) {
     console.log("点击了cell,",book.volumeInfo.title,book.volumeInfo.authors);
     this.props.navigator.pop({
       component: SocialDetailView,
       title: book.volumeInfo.title,
       passProps: {book}
     });
   }

	render() {
		return (
      <View style = {styles.container}>
      <SocialChannel style = {styles.channelViewStyle} />
      <ListView
        style={styles.listViewStyle}
        dataSource={this.state.dataSource}
        renderRow={this._renderNews.bind(this)}
      />
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
    backgroundColor: '#FDF5E6',
    width: Dimensions.get('window').width,
  },
  channelViewStyle:{
    flex: 1,
    // backgroundColor:'#000000',
  },
  listViewStyle: {
      backgroundColor: '#F5FCFF'
  },
  listViewContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#FF4500',
      padding: 10,
      width:Dimensions.get('window').width,
      height:80,
  },
  cellContainer:{
    flexDirection: 'row',
    backgroundColor: '#FDF5E6',
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
      fontSize: 18,
      marginBottom: 8
  },
  author: {
      color: '#656565'
  },
  separator: {
       height: 1,
       backgroundColor: '#dddddd'
   },
   loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   },
   description: {
    fontSize: 20,
    backgroundColor: 'white'
    },
});

module.exports = SocialPageList;
