import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SafeAreaView from '../components/SafeAreaView'
import useAppSelector from '../hooks/useAppSelector'
import { currentAlbum } from '../selectors/albums'
import { currentAlbumPhotos } from '../selectors/photos'
import useAppDispatch from '../hooks/useAppDispatch'
import { unloadCurrentAlbum } from '../thunks/albums'

export interface IAlbumProps {}

const Album: React.FC<IAlbumProps> = () => {
    const dispatch = useAppDispatch()
    useEffect(() => () => { dispatch(unloadCurrentAlbum()) })

    const Album = useAppSelector(currentAlbum)
    const Photos = useAppSelector(currentAlbumPhotos)

    if (!Album) {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Text>No Album Loaded</Text>
                </View>
            </SafeAreaView>
        )
    }

    console.log("[ALBUM]", Album)

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Album Details</Text>
                <Text>{Album.title}</Text>
            </View>
            <View style={styles.spacer} />
            <View>
                <Text>Photos: {Photos.length}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    spacer: {
        height: 20
    }
})

export default Album