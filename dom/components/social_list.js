/**
 * 圈子主界面的列表
 */
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
  RefreshControl,
} from 'react-native';

import SocialChannel from './social_channel'
import SocialListView from './social_list_listView'
import SocialListViewCell from './social_list_listViewCell'
import SocialDetailView from './social_detail'
import Util from '../containers/util'
import ServiceURL from '../containers/service'

class SocialPageList extends Component {
  statics: {
    title: '<RefreshControl>',
    description: 'Adds pull-to-refresh support to a scrollview.'
  }
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      loaded: 1,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
    };
  }
  componentDidMount() {
    this._onRefresh();
  }
  _onRefresh() {
    let baseURL = ServiceURL.book_search + '?count=' + this.state.loaded+'&q=c';
    // let baseURL = "https://api.douban.com/v2/book/search?count=10&q=react-native";
    // let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let that = this;
    this.setState({isRefreshing: true});
     setTimeout(() => {
       Util.get(baseURL, function(data){
         console.log(data.books);
         if(!data.books || !data.books.length){
           return alert('图书服务出错');
         }
         let books = data.books;
         that.setState({
           isRefreshing: false,
           loaded: that.state.loaded + 1,
           dataSource: that.state.dataSource.cloneWithRows(books),
         });
         console.log(that.state.loaded);
       }, function(err){
         alert(err);
       });
     },10);
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
              <Image source={{uri: book.image}}
                    style={styles.thumbnail} />
            </View>
            <View style = {{marginTop:10,marginRight:10}}>
              <Text style={styles.title}>{'书名:'+book.title}</Text>
              <Text style={[styles.author,{marginTop:8}]}>{'作者:'+book.author}</Text>
              <View style = {{flexDirection: 'row',flexWrap:'nowrap',marginTop:15,}}>
                <Text style={{marginRight:10}}>{''+book.publisher}</Text>
                <Text style={{marginRight:10}}>{''+book.pubdate}</Text>
                <Text style={{}}>{''+book.price}</Text>
              </View>
            </View>
            </View>
         <View style={styles.separator} />
         </View>
       </TouchableHighlight>
     );
   }
   _showNewsDetail(book) {
     console.log("点击了cell,",book.title,book.author);
     this.props.navigator.push({
       component: SocialDetailView,
       title: book.title,
       rightButtonTitle: 'pop',
       onRightButtonPress: () => this.props.navigator.pop(),
       passProps: {book}
     });
   }

   _pop(book) {
     console.log("点击了cell,",book.title,book.author);
     this.props.navigator.pop({
       component: SocialDetailView,
       title: book.title,
       passProps: {book}
     });
   }

	render() {
    let myDate = new Date();
    let mytime = new Date().toLocaleTimeString();     //获取当前时间
		return (
      <View style = {styles.container}>
      <SocialChannel style = {styles.channelViewStyle} />
      <ListView
        style={styles.listViewStyle}
        dataSource={this.state.dataSource}
        renderRow={this._renderNews.bind(this)}
        refreshControl={
          // var a = "这里是JScript弹出来的:\nab"+"asdfasdf";
          <RefreshControl refreshing={this.state.isRefreshing}
                          onRefresh={this._onRefresh.bind(this)}
                          tintColor="#ff0000"
                          title= "Loading"
                          titleColor="#00ff00"
                          colors={['#ff0000', '#00ff00', '#0000ff']}
                          progressBackgroundColor="#ffff00"
          />
        }
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
