import {PostDataType} from "./state";
import {addMessageAC, updateAddMessageAC} from "./dialogsReducer";

export type ActionsTypesProfiles =
    ReturnType<typeof addMessageAC>// другая вариация типизаций экшенов
    | ReturnType<typeof updateAddMessageAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateAddPostAC>

export const profilesReducer = (state: PostDataType, action: ActionsTypesProfiles) => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: state.posts.length + 1,
                message: action.valuePost,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "UPDATE-ADD-POST":
            return state.newPostText = action.valueEvent
        default:
            return state
    }

}

export const addPostAC = (valuePost: string) => {
    return {
        type: "ADD-POST",
        valuePost: valuePost
    } as const
}               // вызывается Myposts
export const updateAddPostAC = (valueEvent: string) => {
    return {
        type: "UPDATE-ADD-POST",
        valueEvent: valueEvent
    } as const
}       //  аналогично
