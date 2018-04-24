import React from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableNativeFeedback,
  FlatList,
} from 'react-native';

import {Iconsultation, Iresources, Ireply, Iconsultant} from './Fetch';

import { StackNavigator } from 'react-navigation';

// 当从上一个页面跳转到该页面时，通过上一个页面传递过来的参数，获得详细信息
//由于 react native 的生命周期，导致某些方法的加载顺序不同

export default class Fetch extends React.Component<any, {consulat: Iconsultation}>{
 
  static navigationOptions = ({navigation, navigationOptions}) => {

    const {params} = navigation.state;

    return{
      title: 'consultation detail',
      //导航栏背景颜色
      headerStyle : {
         backgroundColor: '#fce033'
      },
      //回退按钮
      headerTintColor: 'red',
    };
  };

  constructor(props){
    super(props);

    this.state = {
        consulat: undefined,
    }

  }

  componentDidMount(){
    this.findConstructorOne()
    console.info('consulation:',this.props.navigation.state.params.consulation);
  }

  //页面加载时请求
  findConstructorOne(){
    let id = this.props.navigation.state.params.consulation
    console.info('id:',id)

    let address = 'http://yifenganxin.com:9000/ws-specialist/user/180/consulting/' + id +'?at=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6ImhueWYifQ.eyJleHAiOjE1MjE1NjM3ODAsInVpZCI6MTcwLCJjaWQiOjMsIm5hbWUiOiJcdTkwZWRcdTZkNzdcdTVjZjAiLCJhdCI6ImhkUkxqcGlSSHNlbzAwTUM0aEVnbUQ1TEhsNWZJNjhPIn0.1tU7PmYZrMm0H7EokQdmExohdZMfH3L_PD8PmMSlVTY';
    // console.info('address',address);

    // fetch 异步加载过程
    fetch(address,{
      method: 'GET',
      headers:{
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body:null,
    })
    .then((response) => {return response.json()})
    .then((j) =>{
      this.setState({
        consulat:j.data
      })
      console.info('j.data',j.data)
    })
  }

  render(){
    // let id = this.props.consulation;
    // let con = this.state.consulat
    // console.log('con:',con)
    // console.log('con.consultant',con.consultant)
    // let cs = con.consultant
    // console.log('con.consultant.user_email',cs.user_name)
    // console.log('con.consultant.user_name',con.consultant.user_name)
    
    const c: ?Iconsultant = this.state.consulat

    if (!c)
        return null

    return (

      <View>

         <Text>发起人：{c.public}</Text>
      </View>

    );
  }
}


