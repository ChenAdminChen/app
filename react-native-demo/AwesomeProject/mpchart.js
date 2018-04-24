import React from 'react';
import { Text, View,Button,ScrollView } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

// var TitleBar=require('./TitleBar');
// var {
//   BarChart,
//   CombinedChart
// }=require('index.android');

import {BarChart,CombinedChart,LineChart} from 'react-native-chart-android';

export default class Mpchart extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {

    const {params} = navigation.state;

    return{
      title: 'mpchart',
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
      data:{
        xValues:['2018.01.02 22:12:21','2018.01.02 22:13:21','2018.01.02 22:14:21','2018.01.02 22:15:21','2018.01.02 22:16:21','2018.01.02 22:17:21'],
        yValues:[
          {
            data:[4.0,5.0,6.0,4.0,1.0,10],
            label:'历史曲线',
            config:{
              color:'blue'
            }
          },
          // {
          //   data:[4.0,5.0,6.0],
          //   label:'test2',
          //   config:{
          //     color:'red'
          //   }
          // },
          // {
          //   data:[4.0,5.0,6.0],
          //   label:'test2',
          //   config:{
          //     color:'yellow'
          //   }
          // }
        ]
      }
    }
  }

  // getRandomData = () => {
  //   var data={};
  //   data['xValues']=[];
  //   data['yValues']=[
  //     {
  //       data:[],
  //       label:'test1',
  //       config:{
  //         color:'blue'
  //       }
  //     }
  //   ];
  //   for (var i = 0; i < 500; i++) {
  //     data.xValues.push(i+'');
  //     data.yValues[0].data.push(Math.random()*100);
  //   };
  //   return data;
  // },

  render() {
    console.info(this.state.data);
    const c = this.state.data;

    if (!c)
        return null

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Mpchart! fdfdf</Text>
        
        <LineChart
          style = {{width:350,height:400}}
          data={c}
          visibleXRange={[0,30]}
             maxVisibleValueCount={50} 
             xAxis={{
              drawGridLines:false,
              gridLineWidth:1,
              position:"BOTTOM",
              labelRotationAngle: 12.0,
              spaceBetweenLabels: 10,
            }}
             yAxisRight={{enable:false}} 
             yAxis={{
              startAtZero:false,
              drawGridLines:true,
              position:"OUTSIDE_CHART",
              textColor: "#E94343"
              }}
             drawGridBackground={false}
             backgroundColor={"#FAFAFA"} 
             description={"Line Chart sample"}
             legend={{enable:true,position:'ABOVE_CHART_LEFT',direction:"LEFT_TO_RIGHT", legendForm: "CIRCLE"}}
             pinchZoom={true}
             dragDecelerationFrictionCoef={0.5}
             noDataText={"No data available"}
             onSelect={(e) => {
              console.log("onSelect xIndex", e.nativeEvent.xIndex, "yValue:", e.nativeEvent.yValue);
            }}
        />

       {/* <BarChart 
            style={{flex:1}} 
            data={this.state.data}
            visibleXRange={[0,30]}
            maxVisibleValueCount={50} 
                xAxis={{drawGridLines:false,gridLineWidth:1,position:"BOTTOM"}}
                yAxisRight={{enable:false}} 
                yAxis={{startAtZero:false,drawGridLines:false,position:"INSIDE_CHART"}}
                drawGridBackground={false}
                backgroundColor={"WHITE"} 
                description={"测试"}
                legend={{enable:true,position:'ABOVE_CHART_LEFT',direction:"LEFT_TO_RIGHT"}}
            /> */}
      </View>
    );
  }
}


