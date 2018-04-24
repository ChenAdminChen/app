import React from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableNativeFeedback,
  Image,
  FlatList,
  ScrollView,
  SectionList,
} from 'react-native';

// import {Icon} from 'react-native-elements'

import { StackNavigator } from 'react-navigation';

//用于标题的图标
class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./resources/blood.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default class DetailsScreenTwo extends React.Component {
  // 头部格式设计
  static navigationOptions = ({navigation}) =>( {
    title: 'DetailsScreenTwo',
    headerStyle: { backgroundColor: '#607D8B' },
    headerTintColor: 'white',
    headerPressColorAndroid: 'white',
    headerRight:<LogoTitle/>,
  })
  render(){
    // console.log("this.props.navigation,state = " + util.inspect(this.props.navigation.state, false, null));
    return (
      <View style = {{flex:1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen two</Text>

          {/* <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        /> */}
        <View style = {{width: 200, height:80}}>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>

        {/* pop 用于 back stack */}
        <View style = {{width: 200, height:80}}>
          <Button
            title = " Go Back Home "
            onPress={() => this.props.navigation.pop(2)}
          />
        </View>

          <ScrollView>
            <Text style = {styles.explain}>FlatList</Text>
          {/* 用于列表的展示 */}
              <FlatList
              data={[
                {title: 'D', data: ['Devin']},
                {title: 'J', data: ['Devin', "Jackson", "James"]},
                {title: 'h', data: ['Devin', 'Julie']},
              ]}

              renderItem={({item}) => <Text style = {styles.item}>{item.key}</Text>}
            />

            <Text style = {styles.explain}>SectionList</Text>
            <SectionList
              sections = {[
                {titles: 'D', data: ['Devin']},
                {titles: 'J', data: ['Devin', "Jackson", "James"]},
                {titles: 'h', data: ['Devin', 'Julie']},
              ]}

              renderItem = {({item}) => <Text style = {styles.item}>{item}</Text>}
              renderSectionHeader = {({section}) => <Text style = {styles.sectionHeader}>{section.titles}</Text>}
              keyExtractor = {(item, index) => index}
          />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item:{
    padding: 10,
    fontSize: 18,
    height: 44
  },
  sectionHeader:{
    paddingTop:2,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247, 247, 247, 1.0)'
  },
  explain:{
    fontSize:16,
    color:'red',
    paddingBottom: 10,
  }
})
