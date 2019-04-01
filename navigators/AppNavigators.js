import { createStackNavigator } from 'react-navigation'
import { Button } from 'react-native'
import HomePage from '../Page/HomePages'
import Page1 from '../Page/Page1'
import Page2 from '../Page/Page2'
import Page3 from '../Page/Page3'
import Page4 from '../Page/Page4'
import Page5 from '../Page/Page5'

export const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage
    },
    Page1: {
        navigationOptions:({navigation})=>({ // 动态配置
            title: `${navigation.state.params.name}页面名`
        }),
        screen: Page1
    },
    Page2: {
        screen: Page2,
        navigationOptions:{ // 静态配置
            title: 'this is page2'
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions:(props)=>{
            const { navigation } = props;
            const { state,setParams } = navigation;
            const {params} = state;
            return {
                title: params.title?params.title:'this is page3',
                headerRight: (
                    <Button 
                        title={params.mode==='edit'?'保存':'编辑'}
                        onPress={()=>setParams({mode:params.mode==='edit'?'':'edit'})}
                    />
                )
            }
        }
    },
    Page4: {
        screen: Page4
    },
    Page5: {
        screen: Page5
    },

})