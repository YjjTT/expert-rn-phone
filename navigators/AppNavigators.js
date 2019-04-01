import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createDrawerNavigator,
  DrawerItems,
  createSwitchNavigator
} from "react-navigation";
import { Button, Platform, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import HomePage from "../Page/HomePages";
import Page1 from "../Page/Page1";
import Page2 from "../Page/Page2";
import Page3 from "../Page/Page3";
import Page4 from "../Page/Page4";
import Page5 from "../Page/Page5";
import Login from '../Page/Login';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const DrawerNav = createDrawerNavigator({
  Page4: {
    screen: Page4,
    navigationOptions:{
      drawerLabel: 'Page4',
      drawerIcon: ({tintColor})=>(
        <MaterialIcons name={'drafts'} size={24} style={{color: tintColor}}/>
      )
    }
  },
  Page5: {
    screen: Page5,
    navigationOptions:{
      drawerLabel: 'Page5',
      drawerIcon: ({tintColor})=>(
        <MaterialIcons name={'move-to-inbox'} size={24} style={{color: tintColor}}/>
      )
    }
  }
}, {
  initialRouteName: 'Page4',
  contentOptions:{
    activeTintColor: '#e91e63'
  },
  contentComponent: (props) => (
    <ScrollView style={{backgroundColor:'#789', flex: 1}}>
      <SafeAreaView forceInset={{top: 'always', horizontal:'never'}}>
        <DrawerItems {...props}/>
      </SafeAreaView>
    </ScrollView>
  )
})

const AppTopNavigator = createMaterialTopTabNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: "All"
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      tabBarLabel: "iOS"
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: {
      tabBarLabel: "React"
    }
  },
  Page4: {
    screen: Page4,
    navigationOptions: {
      tabBarLabel: "React-Native"
    }
  },
  Page5: {
    screen: Page5,
    navigationOptions: {
      tabBarLabel: "Devio"
    }
  }
},{
  tabBarOptions: {
    tabStyle: { minWidth: 50 },
    upperCaseLabel: false,
    scrollEnabled: true,
    style: {
      backgroundColor: "#678"
    },
    indicatorStyle: {
      height: 2,
      backgroundColor: "white"
    },
    labelStyle: {
      fontSize: 13,
      marginTop: 6,
      marginBottom: 6
    }
  }
});

const AppBottomNavigator = createBottomTabNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: "最热",
      tabBarIcon:({tintColor, focused})=>(
        <Ionicons name={'ios-home'} size={26} style={{color: tintColor}}/>
      )
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      tabBarLabel: "趋势",
      tabBarIcon:({tintColor, focused})=>(
        <Ionicons name={'ios-people'} size={26} style={{color: tintColor}}/>
      )
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: {
      tabBarLabel: "收藏",
      tabBarIcon:({tintColor, focused})=>(
        <Ionicons name={'ios-chatboxes'} size={26} style={{color: tintColor}}/>
      )
    }
  },
  Page4: {
    screen: Page4,
    navigationOptions: {
      tabBarLabel: "我的",
      tabBarIcon:({tintColor, focused})=>(
        <Ionicons name={'ios-aperture'} size={26} style={{color: tintColor}}/>
      )
    }
  }
},{
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
  }
});

/////////////

const AppStack = createStackNavigator({
  Home: { screen: HomePage },
  Page1: { screen: Page1 }
})
const AuthStack = createStackNavigator({
  Login: { screen: Login },
},{
  navigationOptions:{
    // header: null,
  }
})
export default createSwitchNavigator(
  { Auth: AuthStack, App: AppStack },
  { initialRouteName: 'Auth' }
)
////////////

export const AppStackNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage
  },
  Page1: {
    navigationOptions: ({ navigation }) => ({
      // 动态配置
      title: `${navigation.state.params.name}页面名`
    }),
    screen: Page1
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      // 静态配置
      title: "this is page2"
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: props => {
      const { navigation } = props;
      const { state, setParams } = navigation;
      const { params } = state;
      return {
        title: params.title ? params.title : "this is page3",
        headerRight: (
          <Button
            title={params.mode === "edit" ? "保存" : "编辑"}
            onPress={() =>
              setParams({ mode: params.mode === "edit" ? "" : "edit" })
            }
          />
        )
      };
    }
  },
  Page4: {
    screen: Page4
  },
  Page5: {
    screen: Page5
  },
  Bottom:{
    screen: AppBottomNavigator,
    navigationOptions:{
      title: 'Bottom'
    }
  },
  Top:{
    screen: AppTopNavigator,
    navigationOptions:{
      title: 'Top'
    }
  },
  DrawerNav:{
    screen: DrawerNav,
    navigationOptions:{
      title: 'DrawerNav'
    }
  }
});
