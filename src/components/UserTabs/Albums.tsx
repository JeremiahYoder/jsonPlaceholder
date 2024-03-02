import React, { useCallback, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AlbumsScreen from '../../screens/Albums'
import PhotosScreen from '../../screens/Photos'
import useAppDispatch from '../../hooks/useAppDispatch'
import { loadUserAlbums } from '../../thunks/users'
import useAppSelector from '../../hooks/useAppSelector'
import { currentAlbum, currentAlbumId } from '../../selectors/albums'
import Button from '../Button'
import { unloadCurrentAlbum } from '../../thunks/albums'
import Icon from '../Icon'

const AlbumTab = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(loadUserAlbums())
    }, [])

    const albumId = useAppSelector(currentAlbumId)
    const album = useAppSelector(currentAlbum)
    console.log("[album999]", album)

    const resetTab = useCallback(() => {
        dispatch(unloadCurrentAlbum())
    }, [])

    if (albumId) {
        return (
            <View style={{ flex: 1, 
            // borderColor: 'red', borderWidth: 1 
            }}>
                <View style={{ marginBottom: 5, width: '100%', flexDirection: 'row' }} >
                    <TouchableOpacity onPress={resetTab} style={{ alignItems: 'center' }}>
                        <Icon name='keyboard-backspace' size={32} />
                    </TouchableOpacity>
                    <View style={{ flex: 1, 
                    alignItems: 'flex-end', 
                    justifyContent: 'flex-end'
                    // borderColor: 'red', borderWidth: 1 
                    }}>
                        <Text style={{ fontStyle: 'italic', textDecorationLine: 'underline', fontSize: 14 }}>{album.title}</Text>
                    </View>
                </View>
                
                <PhotosScreen />
            </View>
        )
    }

    return <AlbumsScreen />
}

export default AlbumTab