/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class InputButton extends Component<{}> {
  render() {
    return (
      <TouchableHighlight style={[styles.inputButton, this.props.highlight ? styles.inputButtonHighlighted : null]}
        underlayColor="#193441"
        onPress={this.props.onPress}>
        <Text style={styles.inputButtonText}>{this.props.value}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  inputButton:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor:'#91AA9D'
  },
  inputButtonText:{
    fontSize:22,
    fontWeight:'bold',
    color:'white'
  },
  inputButtonHighlighted:{
    backgroundColor: '#193441'
  }
});
