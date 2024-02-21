import React from 'react'
import { SafeAreaView as RNSafeAreaView, ViewProps, StyleSheet } from 'react-native'

const SafeAreaView = (props: ViewProps) => {
    return <RNSafeAreaView style={styles.default} {...props}>{props.children}</RNSafeAreaView>
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        backgroundColor: 'white' // Get from Theme
    },
})

export default React.memo(SafeAreaView);