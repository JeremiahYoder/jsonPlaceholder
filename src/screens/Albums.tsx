import React, { useCallback, useEffect, useMemo } from 'react'
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import SafeAreaView from '../components/SafeAreaView'
import Icon from '../components/Icon'
import useAppSelector from '../hooks/useAppSelector'
import { albums, currentUserAlbums } from '../selectors/albums'
import { IAlbum } from '../types/album'
import useAppDispatch from '../hooks/useAppDispatch'
import { loadAlbumsData, loadCurrentAlbum, unloadCurrentAlbum } from '../thunks/albums'
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
        if (!isUser) { dispatch(loadAlbumsData()) }
        // return () => { dispatch(unloadCurrentAlbum()) }
    }, [])

    const onItemPress = useCallback((id: number) => {
        dispatch(loadCurrentAlbum(id))
        if (!isUser) navigation.navigate('Album')
    }, [isUser])

    const renderItem = useCallback(({ item } : { item: IAlbum }) => {
        return (
            <TouchableOpacity key={item.id} style={styles.row} onPress={() => onItemPress(item.id)}>
                <View style={styles.rowContent}>
                   <Icon name='folder-multiple-image' size={48} />
                   <View style={styles.titleWrapper}>
                    <Text style={styles.albumTitle}>{item.title}</Text>
                   </View>
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
                columnWrapperStyle={styles.columnWrapperStyle}
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
        // borderColor: 'blue',
        // borderWidth: 1
    },
    columnWrapperStyle: {
        flex: 1,
        padding: 5,
        // marginHorizontal: 5,
        justifyContent: 'space-between'
    },
    flatlistStyle: {
        flexGrow: 1,
        width: '100%',
        height: '100%'
    },
    row: { 
        // width: '45%',
        flex: 1,
        minHeight: 100,
        marginHorizontal: 5,
        // height: 50,
        // borderColor: 'gray', borderWidth: 1,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,

        // elevation: 1,
        // shadowColor: 'blue'
        borderTopWidth: 0.5,
        borderRightWidth: 0.5,
        borderLeftWidth: 2,
        borderBottomWidth: 2,



        // {
        //     shadowColor: 'rgba(0,0,0, .4)', // IOS
        //     shadowOffset: { height: 1, width: 1 }, // IOS
        //     shadowOpacity: 1, // IOS
        //     shadowRadius: 1, //IOS
        //     backgroundColor: '#fff',
        //     elevation: 2, // Android
        //     height: 50,
        //     width: 100,
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     flexDirection: 'row',
        // }


    },
    rowContent: {
        flex: 1,
        // borderColor: 'purple', borderWidth: 1, 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start', 
        
        margin: 5, 
        // paddingTop: 5 
    },
    titleWrapper: {
        // borderColor: 'red', borderWidth: 1
    },
    albumTitle: {
        fontSize: 12,
        fontStyle: 'italic'
    }
})

export default Albums