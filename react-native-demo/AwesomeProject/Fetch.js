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

import { StackNavigator } from 'react-navigation';

export interface Iconsultation{
  user_id: number,
  name:string,
  id:number,
  reply_number:number,
  reply?:Array<Ireply>,
  specialist_id: number,
  public?: number,
  resource?: Iresources,
  submitted_time:Date,
  updated_by:number,
  updated_time?:string,
  updated_name?:string,
  number:number,
  consultant?:Iconsultant,
}

export interface Iconsultant{
  user_email:string,
  user_id:number,
  user_name?:string,
}

export interface Iresources{
  url: string,
  type: string,
  content: string 
}

export interface Ireply{
  user_id:string,
  comment:string,
  time:Date
}

// navigation 中定义button按钮调用定义好的函数，并传递参数进行下一个页面
// 使用自定义的数据类型
// 使用fetch发送post请求，FlatView显示在页面中
// TouchableNativeFeedback 中点击时跳转指定页面，并且传递参数到另一个页面

export default class Fetch extends React.Component<any,{ds: Iconsultation[]}>{
 
  static navigationOptions = ({navigation, navigationOptions}) => {

    const {params} = navigation.state;

    return{
      title: 'fetch',
      //导航栏背景颜色
      headerStyle : {
         backgroundColor: '#fce033'
      },
      //回退按钮
      headerTintColor: 'red',
      headerRight: (
        <Button onPress = {() => params.handleSave() } title = "post" color = "#cce090"  />
      ),
    };

  };

  constructor(props){
    super(props);

    this.state = {
        ds: []
    }
  }

  componentDidMount(){
    this.props.navigation.setParams({handleSave: () => this.find_consultation()})
  }

   //查找咨询
  find_consultation (){
    
    let address = 'http://yifenganxin.com:9000/ws-specialist/user/180/consulting/submit?page=0&size=10&order=desc&at=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6ImhueWYifQ.eyJleHAiOjE1MjE1NjM3ODAsInVpZCI6MTcwLCJjaWQiOjMsIm5hbWUiOiJcdTkwZWRcdTZkNzdcdTVjZjAiLCJhdCI6ImhkUkxqcGlSSHNlbzAwTUM0aEVnbUQ1TEhsNWZJNjhPIn0.1tU7PmYZrMm0H7EokQdmExohdZMfH3L_PD8PmMSlVTY'

    fetch(address,{
      method:"GET",
      headers:{
          Accept: 'application/json',
          'Content-type': 'application/json',
      },
      body:null,
    })
    .then((response) => {
      return response.json()
    })
    .then((j) =>{
      // this.setState({
      //   ds: [j.data]
      // })
      this.setState({
        ds:j.data
      });

      console.info(j.data);
      console.info(this.state.ds);
    })

  }

  _onPressItem = (m: Iconsultation) => {
    console.log(m)
    this.props.navigation.navigate('ConsultationDetail', { consulation: m })
}

  render(){
    return (

      <View>
          {/* <Text>{this.state.ds[0]}</Text> */}
          <FlatList
            data = {this.state.ds}
            keyExtractor={(item, id) => `key_${item.id}`}
            renderItem = {({item}) => <Constructors item = {item} onPress = {this._onPressItem}/>}
          />

      </View>

    );
  }
}



class Constructors extends React.Component<any, {item:Iconsultation , onPress?: (id: number) => void}>{
  
  render(){
    const construct = this.props.item;
    return (
      <TouchableNativeFeedback onPress={() => this.props.onPress && this.props.onPress(construct.id)}>
          <View style={{ flex: 1, flexDirection: 'row', margin: 0, marginBottom: 0, padding: 8, paddingBottom: 8, backgroundColor: 'transparent', }}>

            <Text style = {styles.context}>{construct.name}</Text>

            <Text style = {styles.context}>{construct.resource.content}</Text>
          </View>

      </TouchableNativeFeedback>
    )
  };
}

const styles = StyleSheet.create({
  context:{
    paddingRight:10,
    color:'#445fdd',
    height:25,
  }
})