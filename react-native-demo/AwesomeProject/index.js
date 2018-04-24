import { AppRegistry } from 'react-native';

//------------------recat navigation----------------------------
//https://reactnavigation.org/docs/custom-navigators.html 

//StackNavigator
// import App from './App';
// AppRegistry.registerComponent('AwesomeProject', () => App);

//TabNavigator
// import TabMain from './TabMain';
// AppRegistry.registerComponent('AwesomeProject', () => TabMain);

//TabNavigator and StackNavigator

import TabAndStack from './TabAndStack'
AppRegistry.registerComponent('history-chart', () => TabAndStack);

//-----------------------------------------------------------------------


