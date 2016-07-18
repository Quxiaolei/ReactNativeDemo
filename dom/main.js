'use strict';
import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  AppRegistry,
  StyleSheet,
  // TabBarIOS,
  Text,
  View,
  Image,
} from 'react-native';

// import CommonNavigator from './containers/commonNavigator';

import HomePage from './containers/home';
import WealthPage from './containers/wealth';
import SocialPage from './containers/social';
import MePage from './containers/me';

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
const HOME_NORMAL = require('./images/tabbars/homenormal.png');
const HOME_SELECT = require('./images/tabbars/homeselect.png');
const WEALTH_NORMAL = require('./images/tabbars/wealthnormal.png');
const WEALTH_SELECT = require('./images/tabbars/wealthselect.png');
const SOCIAL_NORMAL = require('./images/tabbars/socialnormal.png');
const SOCIAL_SELECT = require('./images/tabbars/socialselect.png');
const ME_NORMAL = require('./images/tabbars/menormal.png');
const ME_SELECT = require('./images/tabbars/meselect.png');

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      notifCount: 0,
      presses: 0,
    };
  }

  render() {
    return (

      <TabNavigator selectedTab = {this.state.selectedTab}>
        <TabNavigator.Item
          title = "首页"
          renderIcon={() => <Image style = {styles.tabIcon} source={HOME_NORMAL} />}
          // renderSelectedIcon={() => <Image style = {styles.tabIcon} source={HOME_SELECT} />}
          selected = {this.state.selectedTab === 'home'}
          onPress = {() => {
            this.setState({
              selectedTab: 'home',
            });
        }}>
        <HomePage />
        </TabNavigator.Item>

        <TabNavigator.Item
		        title = "财富管家"
            renderIcon={() => <Image style = {styles.tabIcon} source={WEALTH_NORMAL} />}
            renderSelectedIcon={() => <Image style = {styles.tabIcon} source={WEALTH_SELECT} />}
            badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
            selected={this.state.selectedTab === 'wealth'}
            onPress={() => {
              this.setState({
              selectedTab: 'wealth',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          <WealthPage/>
          </TabNavigator.Item>

          <TabNavigator.Item
            title = "圈子"
            // icon={{uri: base64Icon, scale: 3}}
            renderIcon={() => <Image style = {styles.tabIcon}  source={SOCIAL_NORMAL} />}
            renderSelectedIcon={() => <Image style = {styles.tabIcon} source={SOCIAL_SELECT} />}
            selected={this.state.selectedTab === 'social'}
            onPress={() => {
            this.setState({
              selectedTab: 'social',
              presses: this.state.presses + 1
            });
          }}>
          <SocialPage/>
          </TabNavigator.Item>

          <TabNavigator.Item
            title="我的"
            renderIcon={() => <Image style = {styles.tabIcon} source={ME_NORMAL} />}
            renderSelectedIcon={() => <Image style = {styles.tabIcon} source={ME_SELECT} />}
            selected={this.state.selectedTab === 'me'}
            onPress={() => {
              this.setState({
                selectedTab: 'me',
              });
            }}>
            <MePage/>
          </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

var styles = StyleSheet.create({
	container:{
		flex:1,
	    justifyContent: 'center',
		alignItems:'center',
		// backgroundColor:'#DDA0DD',
	},
	text:{
		flex:1,
		justifyContent:'center',
		textAlign:'center',
		alignItems:'center',
		margin: 50,
	},
  tabIcon: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
    marginTop: 10
  }
});

module.exports = MainPage;
