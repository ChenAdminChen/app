import * as React from 'react';
import { View, StyleSheet, Dimensions,Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} > <Text>fffff</Text> </View>;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  // _renderScene = SceneMap({
  //   first: FirstRoute,
  //   second: SecondRoute,
  // });
  _renderScene = ({ route }) => {
    switch (route.key) {
    case 'first':
      return <View style={[ styles.page, { backgroundColor: '#ff4081', position:'relative',flex:1} ]}>
        <Text>Hello from Tab View 1</Text>
      </View>
    case 'second':
      return <View style={[ styles.page, { backgroundColor: '#673ab7', position:'relative',flex:1 } ]}>
        <Text>Hello from Tab View 2</Text>
      </View>
    default:
      return null;
    }
  };


  render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});