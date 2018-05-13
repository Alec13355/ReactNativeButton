import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from './components/custombutton.js';
import {Button, NavigatorIOS, Text, View} from 'react-native';

export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyStuff,
          title: 'My Initial Scene',
          passProps: {index: 1},
        }}
        style={{flex: 1}}
      />
    );
  }
}


class MyStuff extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    navigator: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: MyStuff,
      title: 'Scene ' + nextIndex,
      passProps: {index: nextIndex},
    });
  }

  render() {
    return (

      <View>
        <Text style={{padding:'10%'}}>
          Current Scene: {this.props.title}
        </Text>
        <CustomButton
          onPress={() => {this._onForward}}
          text="Tap me to load the next scene"
        />
      </View>
    );
  }
}
