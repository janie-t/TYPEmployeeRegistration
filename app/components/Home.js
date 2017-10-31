
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RegForm from './RegForm'

export default class Home extends Component<{}> {
  render() {
    return (
      <View style={styles.home}>
        <View>
          <RegForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#90B74D',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
  }
})
