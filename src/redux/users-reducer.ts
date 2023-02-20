import {Debugger} from "inspector";


export type ActionsTypes = fallowOrUnfollowActionType | setUsersActionType

export type PhotosType = {
    small: null | string
    large: null | string
}
export type ItmesType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: PhotosType
    status: null
    followed: boolean

}
export type UsersTest = {
    users: ItmesType[]
}

const initialState = {
    items: [] as ItmesType[]

}

type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW-UNFOLLOW":
            return {
                ...state, items: state.items.map(el => el.id === action.payload.usersId
                    ? {...el, followed: action.payload.isDone}
                    : el)
            }
        case "SET-USERS":
            return {...state, items: [...state.items, ...action.payload.newUsers]}
        default:
            return state
    }
}

export type  fallowOrUnfollowActionType = ReturnType<typeof fallowOrUnfollowAC>
export type  setUsersActionType = ReturnType<typeof setUsersAC>

export const fallowOrUnfollowAC = (usersId: number, isDone: boolean) => {
    return {
        type: "FOLLOW-UNFOLLOW",
        payload: {usersId, isDone}
    } as const
}

export const setUsersAC = (newUsers: ItmesType[]) => {
    return {
        type: "SET-USERS",
        payload: {newUsers}
    } as const
}

