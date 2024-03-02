import React, { useCallback, useEffect, useMemo } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import SafeAreaView from '../components/SafeAreaView'
import { IPhoto } from '../types/photo'
import useAppSelector from '../hooks/useAppSelector'
import { currentAlbumPhotos, photos } from '../selectors/photos'
import useAppDispatch from '../hooks/useAppDispatch'
import { loadPhotosData } from '../thunks/photos'
import { currentAlbumId } from '../selectors/albums'

const Photos = () => {
    const dispatch = useAppDispatch()
    
    const currentAlbum = useAppSelector(currentAlbumId)
    const Photos = useAppSelector(currentAlbum ? currentAlbumPhotos : photos)
    const PhotoList = useMemo<IPhoto[]>(() => Object.values(Photos), [Photos])
    console.log("[Photos]PhotoList", PhotoList)

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
                data={PhotoList}
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