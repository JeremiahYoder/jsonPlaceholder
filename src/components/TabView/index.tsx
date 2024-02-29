import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TabView as RNTabView, SceneMap } from 'react-native-tab-view'

const SampleRoute1 = () => <View style={styles.defaultRouteView1} />;
const SampleRoute2 = () => <View style={styles.defaultRouteView2} />;

const defaultScene = {
    first: SampleRoute1,
    second: SampleRoute2
}

const defaultRouteCollection = [
    { key: 'first', title: 'First'},
    { key: 'second', title: 'Second'},
]

const TabView = (props) => {
    const [index, setIndex] = useState(0)
    const [routes] = useState(props.routes ?? defaultRouteCollection)
    const sceneMap = SceneMap(props.sceneMap ?? defaultScene)

    return (
        <RNTabView 
            navigationState={{ index, routes }}
            renderScene={sceneMap}
            onIndexChange={setIndex}
            initialLayout={styles.initialLayout}
            style={{
                borderColor: 'red', borderWidth: 1
            }}
            {...props} 
        />
    )
}

const styles = StyleSheet.create({
    initialLayout: {
        width: '100%'
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