/**
 * 圈子主界面的列表
 */
'use strict';
import React, { Component } from 'react';
// FacebookTabBar
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import GiftedListView from 'react-native-gifted-listview';
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
  RefreshLayoutConsts,
  ScrollView,
  Platform,
  ActivityIndicator,
} from 'react-native';

import SocialChannel from './social_channel'
import SocialListView from './social_list_listView'
import SocialListViewCell from './social_list_listViewCell'
import SocialDetailView from './social_detail'
import Util from '../containers/util'
import ServiceURL from '../containers/service'

// //发现
// class FindListView extends React.Component {
//     render() {
//         return (
//         );
//     }
// }
// //关注
// class ConcernListView extends React.Component {
//     render() {
//         return (
//         );
//     }
// }

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
      newsPage:0,
      channel:0,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
    };
    this._onFetch = this._onFetch.bind(this);
  }
  componentDidMount() {
    // document.addEventListener('scroll', this.handleScroll);
    //渲染时不刷新,界面有自己的渲染方法
    // this._onRefresh();
  }
  _onRefresh(channel) {
    // console.log('channel:'+channel);
    let that = this;
    console.log('channel:'+that.state.channel);
    let baseURL;
    if (that.state.channel ==0) {
      baseURL = ServiceURL.book_search + '?count=' + that.state.loaded+'&q=c';
    }else {
      baseURL = ServiceURL.book_search + '?count=' + that.state.loaded+'&q=c';
    }
    console.log(baseURL);
    // let baseURL = "https://api.douban.com/v2/book/search?count=10&q=react-native";
    // let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    that.setState({isRefreshing: true});
     setTimeout(() => {
       Util.get(baseURL, function(data){
        //  console.log(data.books);
         if(!data.books || !data.books.length){
           return alert('图书服务出错');
         }
         let books = data.books;
         that.setState({
           isRefreshing: false,
           loaded: that.state.loaded + 1,
           dataSource: that.state.dataSource.cloneWithRows(books),
         });
        //  console.log('当前已加载页数:'+that.state.newsPage);
       }, function(err){
         alert(err);
       });
     },100);
   }

   _renderBooks(book) {
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

  _onFetch(page = 1, callback, options) {
    let that = this;
    let loadPage = that.state.newsPage;
    if(options.refresh && options.refresh == true){
      console.log('当前是上拉刷新啦,'+options.refresh);
      loadPage = 0;
      that.setState({
        //!!为什么设置了state后,不会立即变化呢?
        newsPage: 0,
      });
    }
    console.log('_onFetch,channel:'+that.state.channel+', 当前加载的newsPage:'+loadPage);
    let baseURL;
    if (that.state.channel ==0) {
      //http://c.m.163.com/nc/article/list/T1348648756099/ 0-10.html
      baseURL = ServiceURL.news + loadPage*10 + '-10.html';
    }else {
      baseURL = ServiceURL.book_search + '?count=' + that.state.loaded+'&q=react-native';
    }
    console.log('_onFetch,baseURL:'+baseURL);
    setTimeout(() => {
      Util.get(baseURL, function(data){
       //  console.log(data.T1348648756099);
        let news = data.T1348648756099;
        if(!news || !news.length){
          return alert('新闻服务出错');
        }
        that.setState({
          isRefreshing: false,
          newsPage: that.state.newsPage + 1,
        });
        console.log('_onFetch,下次要加载页数:'+that.state.newsPage);
        if (page === 5) {
          callback(news, {
            allLoaded: true, // the end of the list is reached
          });
        } else {
          callback(news);
        }
      }, function(err){
        alert(err);
      });
    },100);
  }

   _renderNews(news) {
     return (
       <TouchableHighlight onPress={() =>
         this._showNewsDetail(news)}
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
              <Image source={{uri: news.imgsrc}}
                    style={styles.thumbnail} />
            </View>
            <View style = {{marginTop:10,marginRight:10}}>
              <Text style={styles.title}>{news.title}</Text>
              <Text style={[styles.author,{marginTop:8}]}>{'作者:'+news.source}</Text>
              <View style = {{flexDirection: 'row',flexWrap:'nowrap',marginTop:15,}}>
                <Text style={{marginRight:10}}>{''+news.source}</Text>
                <Text style={{marginRight:10}}>{''+news.ptime}</Text>
                <Text style={{}}>{''+news.replyCount}</Text>
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
       passProps: {
         book_search_id:1
       },
       params:{
         title:book.title,
         author:book.author,
         book_search_id:1
       }
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
    let that = this;
    return(
      <ScrollableTabView
      style={{marginTop: (Platform.OS === 'android' ? -10 : 10), }}
      initialPage={0}
      renderTabBar={() => <DefaultTabBar />}
      // onScroll=  {() => {console.log('正在滑动中');}}
      onChangeTab =
      // {this._onRefresh.bind(this)}
      {() => {
        console.log('在改变前的tab:'+this.state.channel);
        this.state.channel += 1;
        this.state.channel = this.state.channel%2;
        console.log('在改变后的tab:'+this.state.channel);
        //bind返回一个function函数
        //lambda生成的匿名函数中的this是lambda创建时的this,不是执行时的this
        //不传递this时,默认会传递一个this
        //箭头函数实际上是在这里定义了一个临时的函数，箭头函数的箭头=>之前是一个空括号、单个的参数名、或用括号括起的多个参数名，
        //而箭头之后可以是一个表达式（作为函数的返回值），或者是用花括号括起的函数体（需要自行通过return来返回值，否则返回的是undefined）。ined）。
        this._onRefresh.bind(this,this.state.channel)();
        // this:_onRefresh(this);
      }}
      >

      <GiftedListView
        tabLabel="发现"
        // .bind(this)
        rowView={this._renderNews}     //cell布局
        onFetch= {this._onFetch}    //数据源
        firstLoader={true} // display a loader for the first fetching
        pagination={true} // enable infinite scrolling using touch to load more
        refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
        withSections={false} // enable sections
        enableEmptySections = {true}
        customStyles={{
          paginationView: {
            backgroundColor: '#eee',
          },
        }}
        refreshableTintColor="blue">
      </GiftedListView>

      <ListView
        tabLabel="关注"
        style={styles.listViewStyle}
        dataSource={this.state.dataSource}
        renderRow={this._renderBooks.bind(this)}
        // initialPage = {10}
        refreshControl={
          // var a = "这里是JScript弹出来的:\nab"+"asdfasdf";
          <RefreshControl refreshing={this.state.isRefreshing}
                          onRefresh={this._onRefresh.bind(this)}
                          tintColor="#ff0000"
                          title= "下拉即可刷新..."
                          titleColor="#00ff00"
                          colors={['#ff0000', '#00ff00', '#0000ff']}
                          progressBackgroundColor="#ffff00"
                          // size = {RefreshLayoutConsts.SIZE.DEFAULT, RefreshLayoutConsts.SIZE.LARGE}
          />
        }
      />
      </ScrollableTabView>
    );
    // return (
    //   <View style = {styles.container}>
    //   <SocialChannel style = {styles.channelViewStyle} />
      // <ListView
      //   style={styles.listViewStyle}
      //   dataSource={this.state.dataSource}
      //   renderRow={this._renderNews.bind(this)}
      //   refreshControl={
      //     // var a = "这里是JScript弹出来的:\nab"+"asdfasdf";
      //     <RefreshControl refreshing={this.state.isRefreshing}
      //                     onRefresh={this._onRefresh.bind(this)}
      //                     tintColor="#ff0000"
      //                     title= "下拉即可刷新..."
      //                     titleColor="#00ff00"
      //                     colors={['#ff0000', '#00ff00', '#0000ff']}
      //                     progressBackgroundColor="#ffff00"
      //                     // size = {RefreshLayoutConsts.SIZE.DEFAULT, RefreshLayoutConsts.SIZE.LARGE}
      //     />
      //   }
      // />
    //   </View>
    // );
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
      fontSize: 15,
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
    tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
},
});

module.exports = SocialPageList;
