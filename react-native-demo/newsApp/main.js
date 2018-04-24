/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


 /**
  * 
  * 使用 TabViewAnimated 与TabNavigator时在滑动切换页面时，可能会出现滑动事件处理无法明确到某个具体的菜单上，解决方法如下
  * <TabViewAnimated
      navigationState={ tabsState }
      renderScene={ renderScene }
      renderHeader={ props => <TabBar { ...props } { ...tabBarStyles } /> }
      onRequestChangeTab={ (index) => setTabsState({ ...tabsState, index }) }

      renderPager={ props => <TabViewPagerPan { ...props } /> }

    />
    and with disabling swipe on TabNavigator (required only for android)

  const Tabs = TabNavigator(tabRoutes, {

    lazyLoad: false,
    swipeEnabled: false,

    tabBarOptions,
    tabBarPosition: 'bottom',
  });
  *
  */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  FlatList,
  ScrollView,
  Button
} from 'react-native';

import {TabNavigator,TabViewConfig,StackNavigator} from 'react-navigation';

import { TabViewAnimated, TabBar, SceneMap ,TabViewPagerPan} from 'react-native-tab-view';

import Video from './video';
import askGovernment from './ask-government';
import ask from './ask';
import me from './me';
import Sideslip from './Sideslip';

let {height, width} = Dimensions.get('window');


//底部----------------------------------------------------------------------
interface ICell {
  title: string,
  used: boolean,
  titleColor: string,
  id: number
}
class Header extends Component<any, { menus : Array<ICell>}>{
  
  constructor(props){
    super(props);

    this.state = {
      menus:[
        {title: '首页', used: true, titleColor: '#000000'},
        {title: '视频', used: false, titleColor: '#000000'},
        {title: '问政', used: false, titleColor: '#000000'},
        {title: '问吧', used: false, titleColor: '#000000'},
        {title: '我的', used: false, titleColor: '#000000'}
      ]
    }
  }

  onChangeTitle (i) {
    const m = this.state.menus;

    for(let c in m){
      if( i == c){
        m[c].used = true;
      }else{
        m[c].used = false;
      }
    }

    this.setState({
      menus: m
    })
  }

  render(){

    const ButtonName = ({title, titleColor, value, size}: {title: string, titleColor:string, value: number, size:number}) => <Text style = {{fontSize:size ,color: titleColor,}} onPress = {() => this.onChangeTitle(value)}>{title}</Text>

    let letCell = [];

    //每个菜单之间相隔多少
    let size = width/this.state.menus.length;

    //循环创建菜单
    for(let c in this.state.menus){
      let s = this.state.menus[c];

      letCell.push(<View key = {'key_' + c} style = {{ width : size, alignItems:'center', justifyContent: 'center', borderBottomWidth: s.used? 1 : 0 ,borderBottomColor:'#007ACC' }}><ButtonName size = {s.used? 20: 16} title = {s.title} value = {c}  titleColor = {s.used ? '#007ACC' : s.titleColor}/></View>);
    };

    console.info(letCell);

    return  (
      <View  style={{flex: 1, flexDirection: 'row',height:45,width:350}}>
          {letCell}
          {/* <ListView
            dataSource = {this.state.menus}
            // renderRow={(rowData) => <Text>{rowData}</Text>}
            // renderRow = {(rowData,rowId) => <View key = {'key_' + key} style = {{ width : size, alignItems:'center', justifyContent: 'center', borderBottomWidth: s.used? 1 : 0 ,borderBottomColor:'#007ACC' }}><ButtonName size = {rowData.used? 20: 16} title = {rowData.title} value = {rowId}  titleColor = {rowData.used ? '#007ACC' : rowData.titleColor}/></View>}
            
            renderSectionHeader = {({section}) => <View key = {'key_' + c} style = {{ width : size, alignItems:'center', justifyContent: 'center', borderBottomWidth: s.used? 1 : 0 ,borderBottomColor:'#007ACC' }}><ButtonName size = {s.used? 20: 16} title = {s.title} value = {c}  titleColor = {s.used ? '#007ACC' : s.titleColor}/></View>}
            keyExtractor = {(item, index) => index}
          /> */}
      </View>
    )
  }
}
//--------------------------------


//滚动条
class ScrollBar extends Component{
  render(){

    return (
      <View>
        <Text>滚动条</Text>
      </View>
    )
  }
}

//

const initialLayout = {
  height: 0,
  width: width,
}


//页面处理
// const FirstRoute = () => <View style={ { backgroundColor: '#ff4081' } } > <Text></Text> </View>;
// const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;


class Main extends Component{
  static navigationOptions = ({navigation, navigationOptions}) => {
    const {params} = navigation.state;

    return{
      title: '首页',
      //导航栏背景颜色
      headerStyle : {
         backgroundColor: 'white',
      },
      headerTitleStyle:{
        fontWeight: 'bold',
        fontSize:39
      },
    };
  };

  state = {
    index: 0,
    routes: [
      { key: 'first', title: '推荐' },
      { key: 'second', title: '视频' },
      { key: 'three', title: '时事' },
      { key: 'four', title: '财经' },
      { key: 'five', title: '思想' },
      { key: 'six', title: '生活' },
      { key: 'seven', title: '订阅' },
      { key: 'eight', title: '专题' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} scrollEnabled={true} style = {{backgroundColor:'white',left:60,borderWidth:0}} tabStyle={styles.tab} labelStyle = {{color:'#000000',fontSize:18}}/>;

  // _renderScene = SceneMap({
  //   first: FirstRoute,
  //   second: SecondRoute,
  // });

  _renderScene = ({ route }) => {
    switch (route.key) {
    case 'first':
      return <ScrollView>
              <View style={[ styles.page, { backgroundColor: '#ff4081', height:900, position:'relative'} ]}>
                  <Text>Hello from Tab View 1</Text>
              </View>
          </ScrollView>
      
    case 'second':
      return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]}>
        <Text>Hello from Tab View 2</Text>
      </View>
    case 'three':
      return <View style={[ styles.page, { backgroundColor: 'red' } ]}>
              <Text>Hello from Tab View 2</Text>
            </View>
    case 'four':
      return <View style={[ styles.page, { backgroundColor: 'green' } ]}>
        <Text>Hello from Tab View 2</Text>
      </View>
    case 'five':
      return <View style={[ styles.page, { backgroundColor: '#973ab3' } ]}>
        <Text>Hello from Tab View 2</Text>
      </View>
    case 'six':
      return <View style={[ styles.page, { backgroundColor: '#f73ab4' } ]}>
        <Text>Hello from Tab View 2</Text>
      </View>
    case 'seven':
      return <View style={[ styles.page, { backgroundColor: '#fe3ab5' } ]}>
        <Text>Hello from Tab View 2</Text>
      </View>
    case 'eight':
      return <View style={[ styles.page, { backgroundColor: '#ffffff' } ]}>
        <Text>Hello from Tab View 2</Text>
      </View>
    default:
      return null;
    }
  };

  render() {
    return (
      <View style = {{ left:0,right:0,flex:1}}>
          <View style = {{position:'absolute', backgroundColor:'white',width:60,height:80}}>
            <Button title = 'Detail'  onPress = {() => alert('fff')}/>
            {/* <Button onPress = {() => alert('fffd')} style = {{fontSize:20}}>ffffffffff</Button> */}
          </View>

            <TabViewAnimated
            scrollEnabled
            navigationState={this.state}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onIndexChange={this._handleIndexChange}
            onRequestChangeTab={ (index) => setTabsState({ ...tabsState, index }) }
            initialLayout={initialLayout}
            renderPager={ props => <TabViewPagerPan { ...props } />}
          />
        {/* <View><Text>fff</Text></View> */}
        {/* <View style = {{left:0,right:0,position:"relative"}}>
          <View style = {styles.scrollBar}>
            <ScrollBar/>
          </View>

        </View> */}
      
      </View>
    );
  }
}


const MainScreen = StackNavigator(
  {
    mainScreen:{screen:Main},
    sideslipScreen:{screen:Sideslip}
  },
  {
    animationEnabled: true,
    swipeEnabled:false,   //是否可以滑动左右拖动切换
    lazyLoad: false,
    navigationOptions:{
      visible:true,
    }
  }
);


export default TabNavigator(
  {
    mainScreens:{
      screen: MainScreen,
    },
    videoScreen:{
      screen: Video
    },
    askGovernmentScreen:{
      screen: askGovernment
    },
    askScreen:{
      screen: ask
    },
    meScreen:{
      screen:me
    },
  },
  {
    tabBarPosition: 'bottom',   //将导航栏放于底部，
    animationEnabled: true,
    swipeEnabled:false,   //是否可以滑动左右拖动切换
    lazyLoad: false,
  }
);




const styles = StyleSheet.create({
  // header:{
  //   height:50,
  //   backgroundColor:'white',
  //   bottom:0,
  //   left:0,
  //   right:0,
  //   position:"absolute",
  // },
  tab:{
      width:80
  },
  container: {
    flex: 1,
  },
  scrollBar:{
    height:200,
    backgroundColor:'red',
    left:0,
    right:0,
  },
  textCenter:{
    alignItems:'center',
    justifyContent: 'center'
  },
  page: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
});