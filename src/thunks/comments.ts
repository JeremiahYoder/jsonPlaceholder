import { getComments } from "../api/comments";
import { comments } from "../selectors/comments";
import { loadComments } from "../slices/commentsSlice";
import { AppDispatch, RootState } from "../store";

export function loadCommentsData() {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currComments = comments(getState())
        if (currComments.length) return

        getComments().then(response => {
            if (response.data) dispatch(loadComments(response.data))
        })
    }
}