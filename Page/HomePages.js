/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native'

type Props = {};
export default class HomePage extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>HomePage</Text>
        <Button 
            title={'Go to Page1'}
            onPress={()=>{
                navigation.navigate(
                    'Page1',
                    {name:'动态的'}
                )
            }}
        />
        <Button 
            title={'Go to Page2'}
            onPress={()=>{
                navigation.navigate(
                    'Page1'
                )
            }}
        />
        <Button 
            title={'Go to Page3'}
            onPress={()=>{
                navigation.navigate(
                    'Page1',
                    {name: 'dev'}
                )
            }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: 'green'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
