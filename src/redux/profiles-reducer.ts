


export type ActionsTypesProfiles =

    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateAddPostAC>
    | ReturnType<typeof setAddProfileUser>


export type PostType = {
    id: number,
    message: string,
    likeCount: number
}
export type PostDataType = {
    newPostText: string
    posts: PostType[]
    profileUser: ProfileUserType

}
type ContactsType = {
    "facebook": string
    "website": string
    "vk": string
    "twitter": string
    "instagram": string
    "youtube": string
    "github": string
    "mainLink": string
}
type PhotosType = {
    "small": string
    "large": string
}

export type ProfileUserType = {
    "aboutMe": string
    "contacts": ContactsType
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string
    "fullName": string,
    "userId": number,
    "photos": PhotosType
}


const initialState: PostDataType = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hello my friend. Haw are you?', likeCount: 12},
        {id: 2, message: 'When I returned home ?', likeCount: 12},
        {id: 3, message: 'When I returned home ?', likeCount: 12}
    ],
    profileUser: {} as  ProfileUserType
}
export const profilesReducer = (state: PostDataType = initialState, action: ActionsTypesProfiles): PostDataType => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: state.posts.length + 1,
                message: action.valuePost,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case "UPDATE-ADD-POST":
            return {...state, newPostText: action.valueEvent}
        case "SET-ADD-PROFILE-USER":
            return {...state, profileUser: action.profileUser}
        default:
            return state
    }

}

export type addPostACActionType = ReturnType<typeof addPostAC>
export type updateAddPostACActionType = ReturnType<typeof updateAddPostAC>

export const addPostAC = (valuePost: string) => {
    return {
        type: "ADD-POST",
        valuePost
    } as const
}               // вызывается Myposts
export const updateAddPostAC = (valueEvent: string) => {
    return {
        type: "UPDATE-ADD-POST",
        valueEvent
    } as const
}       //  аналогично
export const setAddProfileUser = (profileUser: ProfileUserType) => {
    return {
        type: "SET-ADD-PROFILE-USER",
        profileUser
    } as const
}       //  аналогично
