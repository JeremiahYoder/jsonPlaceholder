import { getComments } from "../api/comments";
import { comments } from "../selectors/comments";
import { loadComments } from "../slices/commentsSlice";
import { AppDispatch, RootState } from "../store";

export function loadCommentsData() {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currComments = comments(getState())
        console.log("[THUNK][loadCommentsData1]currComments", currComments)

        if (Object.keys(currComments).length) return

        console.log("[THUNK][loadCommentsData2]currComments", currComments)

        getComments().then(response => {
            if (response.data) dispatch(loadComments(response.data))
        })
    }
}