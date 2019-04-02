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
    static navigationOptions = {
        title: 'Home',
        headerBackTitle: '返回' // 设置返回此页面的返回按钮标题, 有长度限制
    }
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
                    'Page2'
                )
            }}
        />
        <Button 
            title={'Go to Page3'}
            onPress={()=>{
                navigation.navigate(
                    'Page3',
                    {name: 'dev'}
                )
            }}
        />
        <Button 
            title={'Go to Bottom'}
            onPress={()=>{
                navigation.navigate(
                    'Bottom',
                )
            }}
        />
        <Button 
            title={'Go to Top'}
            onPress={()=>{
                navigation.navigate(
                    'Top',
                )
            }}
        />
        <Button 
            title={'Go to DrawerNav'}
            onPress={()=>{
                navigation.navigate(
                    'DrawerNav',
                )
            }}
        />
        <Button 
            title={'Go to FlatList'}
            onPress={()=>{
                navigation.navigate(
                    'Page5',
                )
            }}
        />
        <Button 
            title={'Go to SwipealeFaltList'}
            onPress={()=>{
                navigation.navigate(
                    'SwipealeFaltListDemo',
                )
            }}
        />
        <Button 
            title={'Go to SectionListDemo'}
            onPress={()=>{
                navigation.navigate(
                    'SectionListDemo',
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
