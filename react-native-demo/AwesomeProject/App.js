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
  View,
  Button,
  TouchableNativeFeedback
} from 'react-native';

const util = require('util')

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { StackNavigator } from 'react-navigation';

import DetailsScreen from './DetailsScreen';

import DetailsScreenTwo from './DetailsScreenTwo';

class HomeScreen extends React.Component {
  
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};

    return {
      title: 'Home',
      headerStyle: {
        backgroundColor: 'white',
        paddingTop:10,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color:'#000000',
      },
      headerRight: (
        <Button onPress={() => params.increaseCount()} title="+1" color="red" />
      ),
    }
  }

  componentDidMount(){
    this.props.navigation.setParams({
      increaseCount: this._increaseCount
    });
  }

  //HomeScreem 变量值
  state = {
    count : 0,
  };

  _increaseCount = () =>{
    this.setState({count: this.state.count + 1});
  }

  render() {
    console.log("this.props.navigation,state = " + util.inspect(this.props.navigation.state, false, null));
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'red'}}>
        <Text>Home Screen</Text>
        <Text> Count: {this.state.count} </Text>
        <Button title = "Go to Details" value = "test" onPress={ () => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: "First Detailsss",
            });
          }}
        />

         <TouchableNativeFeedback onPress={this._onPressButton} background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
              <Text style={{margin: 30}}>Button</Text>
            </View>
          </TouchableNativeFeedback>
      </View>
    );
  }
}


const RootStack = StackNavigator({
    Home: {
      screen: HomeScreen,
    },
    Details:{
      screen: DetailsScreen,
    },
    DetailsTwo:{
      screen:DetailsScreenTwo,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions:{
      headerStyle:{
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle:{
        fontWeight: "bold",
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   }
// });
