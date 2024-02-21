import React, { useCallback, useEffect } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import SafeAreaView from '../components/SafeAreaView'
import { IPhoto } from '../types/photo'
import useAppSelector from '../hooks/useAppSelector'
import { photos } from '../selectors/photos'
import useAppDispatch from '../hooks/useAppDispatch'
import { loadPhotosData } from '../thunks/photos'

const Photos = () => {
    const dispatch = useAppDispatch()
    const Photos = useAppSelector(photos)

    useEffect(() => {
        dispatch(loadPhotosData())
    }, [])

    const renderItem = useCallback(({ item } : { item: IPhoto }) => {
        return (
            <View key={item.id} style={styles.row}>
                <Text>ID: {item.id}</Text>
                <Text>Title: {item.title}</Text>
                <Text>URL: {item.url}</Text>
                <Text>Thumbnail URL: {item.thumbnailUrl}</Text>
            </View>
        )
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                keyExtractor={photo => photo.id.toString()}
                data={Photos}
                renderItem={renderItem}
                contentContainerStyle={styles.contentContainerStyle}
                style={styles.flatlistStyle}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainerStyle: {
        borderColor: 'blue',
        borderWidth: 1
    },
    flatlistStyle: {
        flexGrow: 1,
        width: '100%',
        height: '100%'
    },
    row: { 
        borderColor: 'red', 
        borderWidth: 1, 
    }
})

export default Photos