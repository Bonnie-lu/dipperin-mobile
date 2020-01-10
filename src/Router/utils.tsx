import React from 'react'
import TabIcon from './TabIcon'

export const defaultTabBarOptions = ({ navigation }: any) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
        tabBarVisible = false
    }
    return { tabBarVisible }
}

export const getTabNavigationOptions = ({ navigation }: any) => {
    return {
        tabBarIcon: ({ focused }: any) => {
            return (<TabIcon routeName={navigation.state.routeName} focused={focused} />)
        },
        tabBarOptions: {
            activeTintColor: '#14399F',
            labelStyle: {
                fontSize: 12
            },
            style: {
                height: 48,
                borderTopColor: '#E7F2DF',
                backgroundColor: navigation.state.routeName === 'discovery' ? '#0B0E19' : '#ffffff'
            },
        },
    }
}




