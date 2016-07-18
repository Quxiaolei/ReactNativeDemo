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

import ListViewCell from './social_list_listViewCell'
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

class SocialListView extends Component {
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
   _renderBook(book) {
     return (
       <TouchableHighlight onPress={() =>
        //  this.props.navig  ator.push({
        //    title:book.volumeInfo.title,
        //    component:SocialDetailView,
        //    passProps:{book}
        //  })}
         this._showBookDetail(book)}
      //    Alert.alert(
      //    'Alert Title',
      //    'alertMessage',
      //    [{text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
      //    {text: 'OK', onPress: () => console.log('OK Pressed!')},
      //    {text: 'Other', onPress: () => console.log('Other Pressed!')},])
      //  }
                           underlayColor='#dddddd'>
         <View>
           <View style={styles.container}>
             <Image source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                   style={styles.thumbnail} />
             <View style={styles.rightContainer}>
               <Text style={styles.title}>{book.volumeInfo.title}</Text>
               <Text style={styles.author}>{book.volumeInfo.authors}</Text>
             </View>
           </View>
         <View style={styles.separator} />
         </View>
       </TouchableHighlight>
     );
   }
   _showBookDetail(book) {
     console.log("点击了cell,",book.volumeInfo.title,book.volumeInfo.authors);
     this.props.navigator.push({
       component: SocialDetailView,
       title: book.volumeInfo.title,
       passProps: {book}
     });
   }
   render() {
     return (
       <ListView
       style={styles.listViewStyle}
        dataSource={this.state.dataSource}
        renderRow={this._renderBook.bind(this)}
      />
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
   listViewStyle: {
       backgroundColor: '#F5FCFF'
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

module.exports = SocialListView;
