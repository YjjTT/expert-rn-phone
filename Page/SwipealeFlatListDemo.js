/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, RefreshControl,ActivityIndicator, SwipeableFlatList,TouchableHighlight,Alert} from 'react-native';

type Props = {};
const City_Names = ['北京', '上海', '广州', '深圳','沈阳', '安徽', '大连','合肥','石家庄','河北','天津']

export default class SwipealeFaltListDemo extends Component<Props> {
  _renderItem = (data) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{data.item}</Text>
    </View>
  )
  _renderQuickActions({item}) {
    return (
      <View style={styles.actionsContainer}>
        <TouchableHighlight
          style={styles.actionButton}
          onPress={() => {
            Alert.alert(
              'Tips',
              'You could do something with this edit action!',
            );
          }}>
          <Text style={styles.actionButtonText}>Edit</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.actionButton, styles.actionButtonDestructive]}
          onPress={() => {
            Alert.alert(
              'Tips',
              'You could do something with this remove action!',
            );
          }}>
          <Text style={styles.actionButtonText}>Remove</Text>
        </TouchableHighlight>
      </View>
    );
  }

  constructor(props) {
    super(props);
  
    this.state = {
      isLoading : false,
      dataArray: City_Names,
    };
  }

  loadData(refreshing){
    if(refreshing){
      this.setState({
        isLoading: true,
      })
    }
    setTimeout(()=>{
      let dataArrays = []
      if(refreshing){
        for(let i = this.state.dataArray.length - 1; i >= 0; i--){
          dataArrays.push(this.state.dataArray[i]);
        }
      }else{
        dataArrays = this.state.dataArray.concat('哈哈')
      }
      this.setState({
        dataArray: dataArrays,
        isLoading: false
      })
    }, 2000)
  }
  getIndicator () {
    return <View style={styles.indicatorContainer}>
      <ActivityIndicator size={'large'} animation={true} style={styles.indicator}/>
      <Text>正在加载更多</Text>
    </View>
  }

  render() {
    return (
      <View style={styles.container}>
        <SwipeableFlatList 
          data={this.state.dataArray}
          renderItem={(data)=>this._renderItem(data)}
          renderQuickActions={(data)=>this._renderQuickActions(data)}
          bounceFirstRowOnMount={true}
          maxSwipeDistance={160}
          keyExtractor={(data, index) => index.toString()}
          refreshControl={
            <RefreshControl 
              title={'Loading'}
              tintColor={'red'}
              refreshing={this.state.isLoading}
              onRefresh={()=>{
                this.loadData(true);
              }}
            />
          }
          ListFooterComponent={()=>this.getIndicator()}
          onEndReached={()=>{
            this.loadData(false)
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
  item: {
    backgroundColor: '#169',
    height: 200,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText:{
    color: 'white',
    fontSize: 20,
  },
  indicatorContainer: {
    alignItems: 'center',
  },
  indicator:{
    margin: 10
  },
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  actionButton: {
    padding: 10,
    width: 80,
    backgroundColor: '#999999',
  },
  actionButtonDestructive: {
    backgroundColor: '#FF0000',
  },
  actionButtonText: {
    textAlign: 'center',
  },
});
