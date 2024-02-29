import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TabView as RNTabView, SceneMap } from 'react-native-tab-view'

export interface TabViewScene {
    [key: string]: () => React.JSX.Element
}

export interface TabViewRoute { 
    key: string, 
    title: string 
}

const DEFAULTS: { routes: TabViewRoute[], sceneMap: TabViewScene } = {
    routes: [
        { key: 'first', title: 'First'},
        { key: 'second', title: 'Second'},
    ],
    sceneMap: {
        first: () => <View style={styles.defaultRouteView1} />,
        second: () => <View style={styles.defaultRouteView2} />
    }
}

// TODO: INTERFACE
const TabView = (props: any) => {
    const [index, setIndex] = useState(0)
    const [routes] = useState<TabViewRoute[]>(props.routes ?? DEFAULTS.routes)
    const sceneMap = SceneMap<TabViewScene>(props.sceneMap ?? DEFAULTS.sceneMap)

    return (
        <RNTabView 
            navigationState={{ index, routes }}
            renderScene={sceneMap}
            onIndexChange={setIndex}
            initialLayout={styles.initialLayout}
            style={styles.tabViewStyle}
            sceneContainerStyle={styles.tabViewSceneContainerStyle}
            {...props} 
        />
    )
}

const styles = StyleSheet.create({
    initialLayout: {
        width: '100%'
    },
    tabViewStyle: {

    },
    tabViewSceneContainerStyle: {
        paddingTop: 10,
    },
    defaultRouteView1: {
        flex: 1,
        backgroundColor: '#ff4081'
    },
    defaultRouteView2: {
        flex: 1,
        backgroundColor: '#673ab7'
    }
})

export default TabView