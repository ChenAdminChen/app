import React from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableNativeFeedback,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SectionList,
} from 'react-native';

import {TabNavigator, StackNavigator} from 'react-navigation';

import DetailsScreenTwo from './DetailsScreenTwo';
import Fetch from './Fetch';
import ConsultationDetail from './consultation-detail';
import Mpchart from './mpchart';

export interface Specialist{
    id: number,
    name: string,
    gender: number,
    email: string,
    phone: string,
    avatar: string,
    imId: string,
    regDate: string,

    spDomain: string,
    spType: string,
    professionalTitle: string,
    spSkilled: string,
}

class HomeScreen extends React.Component<any, {ds: Specialist[]}>{

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            ds: []
        }
    }

    _onPress = () => {
        this.setState({
            count:this.state.count + 1,
        });
    }

    //POST GET
    getSpecialist(){
        let address = 'http://yifenganxin.com:9000/ws-specialist/company/3/specialists?at=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6ImhueWYifQ.eyJleHAiOjE1MjEyMDI2OTEsInVpZCI6MTcwLCJjaWQiOjMsIm5hbWUiOiJcdTkwZWRcdTZkNzdcdTVjZjAiLCJhdCI6ImhkUkxqcGlSSHNlbzAwTUM0aEVnbUQ1TEhsNWZJNjhPIn0.TzDiCz4jxe62Xy9nTJMEtxHIal1YwDOAvAYaU5pxjvI'

        fetch(address, {
            method:"GET",
            headers:{
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body:null,

        }).then((response) => {return response.json()})
        .then( (j) => {
            console.log(j);

            this.setState({
                ds:[j]
            });
            console.info(j);
        });
    }

    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home screen</Text>
                <View style =  {styles.view}>
                    <Button title = 'Detail' color = 'red' onPress = {() => this.props.navigation.navigate('Settings')}/>
                </View>

                <View style =  {styles.view}>
                    <Button title = 'DetailTwo' color = 'red' onPress = {() => this.props.navigation.navigate('DetailsScreen')}/>
                </View>

                <View style = {styles.view}>
                    <Button title = 'mpchart' color = 'red' onPress = {() => this.props.navigation.navigate('Mpchart')}/>
                </View>

                <ScrollView style = {{ marginTop:100, width:300}}>

                    {/* TouchableOpactiy用法 */}
                    <View style = {{width:100, height:300}}>
                        <Text>TouchableOpactiy用法</Text>
                        <TouchableOpacity
                            style = {styles.button}
                            onPress = {this._onPress}
                            activeOpacity = {0.1}
                        >
                        <Text> {this.state.count} </Text>

                        </TouchableOpacity>
                        <Button title = 'post' color = 'red' onPress = {() => this.getSpecialist()}/>
                    </View>
                    
                  
                    {/* <View style = {{width:100, height:300}}>
                        {/* <Text>sss</Text> 
                        <Name value = 'ff'/>
                        {/* <Text>{this.state.ds[0].email}</Text> 

                       <SectionList
                            sections = {this.state.ds}
                            renderItem = {({item}) => <Text>{item.email}</Text>}
                            keyExtractor = {(item, index) => index}
                            renderSectionHeader = {({section}) => <Text style = {styles.sectionHeader}>{section.result}</Text>}
                            />
                    </View> */}
                </ScrollView>
            </View>
        );
    };
}

const Name = ({value}: {value: string}) => <Text>{value}</Text>
//-----------------------------------------------------------------------------------------------------------------\
class DetailScreen extends React.Component{


    render(){
        return (
            <View style={{  }}>
                <Text>Detail screen</Text>
                <View style = {{height:30, width:200}}>
                    <Button title = 'go to setting screen' color = 'red' onPress = {() => this.props.navigation.navigate('Settings')}/>
                </View>

                <View style = {{height:30,top:20, width:200}}>
                    <Button title = 'go to home' color = 'red' onPress = {() => this.props.navigation.navigate('Home')}/>
                </View>

            </View>
        );
    };
}

//-----------------------------------------------------------------------------------------------------------------


class SettingScreen extends React.Component{
    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Setting screen</Text>
                <Button title = 'go to Detail screen' color = 'red' onPress = {() => this.props.navigation.navigate('Detail')}/>
            </View>
        );
    };
}

// const HomeStack =  StackNavigator (
//     {
//         Home:{screen: HomeScreen},
//         Detail:{screen: DetailScreen},
//     }
// );

// const SettingStack = StackNavigator (
//     {
//         Settings:{screen: SettingScreen},
//         Details:{screen: DetailScreen},
//     }
// );

// export default TabNavigator ({
//     Home: {screen: HomeStack},
//     Settings:{screen: SettingStack}
// })


const HomeTab =  TabNavigator (
    {
        Home:{screen: HomeScreen},
        Detail:{screen: DetailScreen},
        Fetch:{screen:Fetch},
    }
);

const DetailTab= TabNavigator (
    {
        Details:{screen: DetailScreen},
        Settings:{screen: SettingScreen},
    }
);

export default StackNavigator ({
    Home: {screen: HomeTab},
    Details:{screen: DetailTab},
    DetailsScreen:{screen: DetailsScreenTwo},
    ConsultationDetail:{screen:ConsultationDetail},
    Mpchart:{screen:Mpchart}
})

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginBottom:10,
    },
    view:{
        height:30,
        top:20,
        width:100,
        bottom:20,
    }
});
