import React from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableNativeFeedback
} from 'react-native';

// import {SmoothLine} from 'react-native-pathjs-charts';

import Echarts from 'native-echarts';

// import {Icon} from 'react-native-elements'

import { StackNavigator } from 'react-navigation';

export default class DetailsScreen extends React.Component{
  static navigationOptions = ({navigation, navigationOptions}) => {
    const {params} = navigation.state;

    return{
      title: params ? params.otherParam: 'A Nested Details Screen',
      //导航栏背景颜色
      headerStyle : {
         backgroundColor: navigationOptions.headerTintColor 
      },
      //回退按钮
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
      // headerPressColorAndroid: 'white',

      // headerRight: (
      //   <Button onPress = {params.increaseCount} title = "+1" color = "red" />
      // ),
    };
  };

  //数据
  const option = {
    title: {
        text: 'ECharts demo'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
  };

  render(){
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam: null;

    // console.log("this.props.navigation,state = " + util.inspect(this.props.navigation.state, false, null));
    return (
      // <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
          <Text>Details Screen</Text>

          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <View style = {{height:30, top:10, width:100, left:40}}>
          <Button
            title="下一页"
            onPress={() => this.props.navigation.navigate('DetailsTwo')}
          />
        </View>

        <View style = {{height:20, top:40, width:100, left:40}}>
          <Button 
            title = "返回上一页"
            onPress = {() => this.props.navigation.goBack()}
          />
        </View>

        {/* 更新标题 */}
        <View style = {{height:20, top:60, width:200, left:40}}>
          <Button
            title = "Update the title"
            onPress = {() =>{this.props.navigation.setParams({ otherParam: "Updated!"});}
            }
          />
        </View>

        {/* 返回到上一个页面 */}
        {/* <Button style = {{paddingTop:30,flex:1}}
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        /> */}
      </View>
    );
  }
}