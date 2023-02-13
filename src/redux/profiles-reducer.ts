
import {addMessageAC, updateAddMessageAC} from "./dialogs-reducer";


export type ActionsTypesProfiles = ReturnType<typeof addMessageAC>// другая вариация типизаций экшенов
    | ReturnType<typeof updateAddMessageAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateAddPostAC>

// addPostACActionType| updateAddPostACActionType
export type PostType = {
    id: number,
    message: string,
    likeCount: number
}
export type PostDataType = {
    newPostText: string
    posts: PostType[]

}
const initialState:PostDataType ={
    newPostText: '',
    posts: [
        {id: 1, message: 'Hello my friend. Haw are you?', likeCount: 12},
        {id: 2, message: 'When I returned home ?', likeCount: 12},
        {id: 3, message: 'When I returned home ?', likeCount: 12}
    ]
}
export const profilesReducer = (state: PostDataType=initialState, action: ActionsTypesProfiles):PostDataType => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: state.posts.length + 1,
                message: action.valuePost,
                likeCount: 0
            }
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText : ''
            }
        case "UPDATE-ADD-POST":
            console.log(action)
            return  {...state, newPostText: action.valueEvent}
        default:
            return state
    }

}

export type addPostACActionType = ReturnType<typeof addPostAC>
export type updateAddPostACActionType = ReturnType<typeof updateAddPostAC>

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
