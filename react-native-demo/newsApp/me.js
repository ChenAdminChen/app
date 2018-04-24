/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {TabNavigator} from 'react-navigation';

export default class me extends Component{
  static navigationOptions = ({navigation, navigationOptions}) => {
    const {params} = navigation.state;

    return{
      title: '我的',
      //导航栏背景颜色
      headerStyle : {
         backgroundColor: 'white',
      },
      headerTitleStyle:{
        fontWeight: 'bold',
        fontSize:39
      }
    };
  };

  render() {
    return (
      <View >
        <View>
          <Text>头部导航</Text>
        </View>
        <View>
          <Text>主体部分</Text>
        </View>
        <View>
          <Text>底部导航</Text>
        </View>
      </View>
    );
  }
}

