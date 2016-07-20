/**
 * 圈子列表内容详情页
 */

'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  ListView,
  ListViewDataSource,
  Image,
  Dimensions,
  ToastAndroid,
  Platform
} from 'react-native';

import SocialCommentList from './comment_list';

const AYTHOR = '这就是详情页';
const TITLE = '快来看快来看';
const TIME = '11:29';
const CONTENT = '【环球时报综合报道】美国佛罗里达州迪士尼乐园的一名实习生，因为在社交媒体揭露迪士尼隐瞒鳄鱼消息的政策而遭解雇。如今这名实习生又重新上岗。据英国《卫报》17日报道，自上月迪士尼发生鳄鱼咬死男童事件后，有关鳄鱼的各种消息都令迪士尼紧张万分。一名叫香农·苏利文的实习生近日爆料称，她在迪士尼员工休息室内看到一张通告。上面写道：“如有游客询问周边水域是否有鳄鱼时，正确的答案应该是：‘据我们所知没有，但如果我们看到鳄鱼，我们会打电话给有关当局来移除鳄鱼。’”通告还特别提醒新雇员，不要说“我们之前看到过鳄鱼。”苏利文将通告拍下来并上传到社交网站。而迪士尼也立即移除这张通告。但苏利文因此事被开除。此事被媒体曝光后，迪士尼高层15日亲自拜访苏利文，邀请她回到迪士尼工作。据悉，苏利文将继续工作至实习期结束时。';

export default class SocialDetailPage extends Component {
  constructor() {
    super();
    // ToastAndroid.show('哈哈哈哈哈', ToastAndroid.SHORT);
    // 构造假数据
    var ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
        dataSource: ds.cloneWithRows(this._genRows({})),
    };
  }

  _genRows(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 0; ii < 10; ii++) {
        var pressedText = pressData[ii] ? ' (pressed)' : '';
        dataBlob.push('Row ' + ii + pressedText);
    }
    return dataBlob;
  }

  _renderRow(rowData: string, sectionID: number, rowID: number) {
    var rowHash = Math.abs(hashCode(rowData));
    var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
    return (
      <View>
        <View style={styles.row}>
          <Image style={styles.thumb} source={imgSource} />
          <Text style={styles.text}>
            {rowData + ' - ' + LOREM_IPSUM.substr(0, rowHash % 301 + 10)}
          </Text>
        </View>
      </View>
    );
  }

  // 渲染分割线
  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
        }}/>
    );
  }

  // 查看所有评论方法
  lookAllComment() {
    // ToastAndroid.show('文本被点击了', ToastAndroid.SHORT);
    console.log('点击了查看所有评论按钮');
    this.props.navigator.push({ // 活动跳转，以Navigator为容器管理活动页面
      component: SocialCommentList,
      title: '50条评论',
      rightButtonTitle: 'pop',
      onRightButtonPress: () => this.props.navigator.pop(),
      // passProps: {book}
    });
  }

  // 返回
  back() {
    ToastAndroid.show('已返回！', ToastAndroid.SHORT);
  }

  // 编辑
  edit() {
    ToastAndroid.show('请编辑！', ToastAndroid.SHORT);
  }

  // 评论
  comment() {
    ToastAndroid.show('请评论！', ToastAndroid.SHORT);
  }

  // 赞
  praise() {
    ToastAndroid.show('谢谢赞美！', ToastAndroid.SHORT);
  }

  // 转发
  forward() {
    ToastAndroid.show('转发成功！', ToastAndroid.SHORT);
  }

	render() {
		return (
	    <View style = {styles.container}>
        <ScrollView style = {styles.scrollViewContainer}>
          <Text style = {styles.content}>
            {AYTHOR}
          </Text>
          <Text style = {styles.content}>
            {TITLE}
          </Text>
          <Text style = {styles.content}>
            {TIME}
          </Text>
          <Text style = {styles.content}>
            {CONTENT}
          </Text>
          <Text style = {styles.content_center}>
            最新评论
          </Text>

          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            // renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
            renderSeparator={this._renderSeparator}
            automaticallyAdjustContentInsets={false}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps={true}
            showsVerticalScrollIndicator={false}
            style={styles.listView}
            initialListSize={10} // 指定在组件刚挂载的时候渲染多少行数据
            pageSize={10}  // 每次事件循环（每帧）渲染的行数。
            />

            <View style = {styles.row}>
              <TouchableHighlight onPress = {() => this.lookAllComment()}>
                <View style = {styles.view}>
                  <Image style = {styles.bottomButtonIcon} source = {require('../images/iconlogo.png')}/>
                  <Text style = {{textAlignVertical: 'center', color: '#ffcccc'}}>
                    查看所有评论
                  </Text>
                </View>
              </TouchableHighlight>
            </View>


        </ScrollView>

        <View style = {styles.bottomContainer}>
          <View style = {styles.iconContainer}>
            <TouchableHighlight onPress = {() => this.back()}>
              <Image style={styles.bottomButtonIcon} source={require('../images/iconlogo.png')}/>
            </TouchableHighlight>
          </View>
          <View style = {styles.iconContainer}>
            <TouchableHighlight onPress = {() => this.edit()}>
              <Image style={styles.bottomButtonIcon} source={require('../images/iconlogo.png')}/>
            </TouchableHighlight>
          </View>
          <View style = {styles.iconContainer}>
            <TouchableHighlight onPress = {() => this.comment()}>
              <Image style={styles.bottomButtonIcon} source={require('../images/iconlogo.png')}/>
            </TouchableHighlight>
          </View>
          <View style = {styles.iconContainer}>
            <TouchableHighlight onPress = {() => this.praise()}>
              <Image style={styles.bottomButtonIcon} source={require('../images/iconlogo.png')}/>
            </TouchableHighlight>
          </View>
          <View style = {styles.iconContainer}>
            <TouchableHighlight onPress = {() => this.forward()}>
              <Image style={styles.bottomButtonIcon} source={require('../images/iconlogo.png')}/>
            </TouchableHighlight>
          </View>
        </View>
		  </View>
	  );
	}
}

var THUMB_URLS = [
    require('../images/iconlogo.png'),
    require('../images/iconlogo.png'),
    require('../images/iconlogo.png'),
    require('../images/iconlogo.png'),
    require('../images/iconlogo.png'),
    require('../images/iconlogo.png'),
    require('../images/iconlogo.png'),
    require('../images/iconlogo.png'),
    require('../images/iconlogo.png'),
    require('../images/iconlogo.png'),
    require('../images/iconlogo.png'),
    require('../images/iconlogo.png'),
  ];
var LOREM_IPSUM = '我是一个cell！';

/* eslint no-bitwise: 0 */
var hashCode = function(str) {
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:(Platform.OS === 'android' ? 0 : 20),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
  },
  scrollViewContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  content: {
    fontSize: 16,
    backgroundColor: 'white'
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  content_center: {
    fontSize: 16,
    backgroundColor: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    paddingBottom: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    backgroundColor: '#e9eaed',
    height: 35,
    justifyContent: 'center', // 容器view水平居中
    alignItems: 'center', // 容器view垂直居中
    maxWidth: Dimensions.get('window').width,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    borderTopWidth: 1,
    borderTopColor: '#FFCCCC',
    overflow: 'visible', // hidden
  },
  iconContainer: {
    width: Dimensions.get('window').width / 5,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonIcon: {
    width: 24,
    height: 24,
  },
});
