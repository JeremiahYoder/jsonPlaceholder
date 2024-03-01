import React, { useEffect } from 'react'
import PostsScreen from '../../screens/Posts'
import useAppDispatch from '../../hooks/useAppDispatch'
import { loadUserPosts } from '../../thunks/users'

const PostTab = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(loadUserPosts())
    }, [])

    return (
        <PostsScreen />
    )
}

export default PostTab