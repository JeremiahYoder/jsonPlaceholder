import React, { useCallback, useEffect, useMemo } from 'react'
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import SafeAreaView from '../components/SafeAreaView'
import Icon from '../components/Icon'
import useAppSelector from '../hooks/useAppSelector'
import { albums, currentUserAlbums } from '../selectors/albums'
import { IAlbum } from '../types/album'
import useAppDispatch from '../hooks/useAppDispatch'
import { loadAlbumsData, loadCurrentAlbum } from '../thunks/albums'
import useAppNavigation from '../hooks/useAppNavigation'
import { currentUserId } from '../selectors/users'

const Albums = () => {
    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()

    const isUser = useAppSelector(currentUserId)
    const Albums = useAppSelector(isUser ? currentUserAlbums : albums)
    const AlbumList = useMemo<IAlbum[]>(() => Object.values(Albums), [Albums])
    console.log("[Albums]AlbumList", AlbumList)

    useEffect(() => { 
        if (!isUser) dispatch(loadAlbumsData())
    }, [])

    const onItemPress = useCallback((id: number) => {
        dispatch(loadCurrentAlbum(id))
        navigation.navigate('Album')
    }, [])

    const renderItem = useCallback(({ item } : { item: IAlbum }) => {
        return (
            <TouchableOpacity key={item.id} style={styles.row} onPress={() => onItemPress(item.id)}>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 5, paddingTop: 5 }}>
                   <Icon name='folder-multiple-image' size={48} />
                   <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }, [])

    return (
        <SafeAreaView>
            <FlatList 
                keyExtractor={item => item.id.toString()}
                data={AlbumList}
                numColumns={2}
                renderItem={renderItem}
                contentContainerStyle={styles.contentContainerStyle}
                columnWrapperStyle={{
                    flex: 1,
                    padding: 10,
                    justifyContent: 'space-between'
                }}
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
        width: '48%',
        // height: 50,
        borderColor: 'red', borderWidth: 1,
        borderRadius: 5
    }
})

export default Albums