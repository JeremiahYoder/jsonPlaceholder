import React, { useEffect } from 'react'
import AlbumsScreen from '../../screens/Albums'
import useAppDispatch from '../../hooks/useAppDispatch'
import { loadUserAlbums } from '../../thunks/users'

const AlbumTab = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(loadUserAlbums())
    }, [])

    return (
        <AlbumsScreen />
    )
}

export default AlbumTab