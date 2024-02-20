import { getPosts } from "../api/posts";
import { posts } from "../selectors/posts";
import { loadPosts } from "../slices/postsSlice";
import { AppDispatch, RootState } from "../store";

export function loadPostsData() {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currPosts = posts(getState())
        if (currPosts?.length) {
            console.log("[loadPostsData]", "POSTS EXIST")
            return
        }

        console.log("[loadPostsData]", "LOADING NEW POSTS")
        getPosts().then(data => {
            if (data) dispatch(loadPosts(data))
        })
    }
}