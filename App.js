import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'

import Facebook from './screens/fb'
import Instagram from './screens/in'

export default class App extends Component {
  render() {
    return(
      <View>
        <AppContainer />
      </View>
    )
  }
}

const tab = createBottomTabNavigator({
  Facebook: Facebook,
  Instagram: Instagram
});

const AppContainer = createAppContainer(tab);
