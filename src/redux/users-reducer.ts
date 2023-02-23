import {Debugger} from "inspector";



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
export type ActionsTypes = fallowOrUnfollowActionType
    | setUsersActionType |setNumberPageActionType | setTotalCountsActionType

const initialState = {
    items: [] as ItmesType[],
    pageSizeUsers:4,
    totalUsers:0,
    numberPage:1

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
            return {...state, items: action.payload.newUsers}

        case "SET-PAGE":
            return {...state, numberPage: action.payload.newPage}
        case "SET-TOTAL-COUNT":
            return {...state, totalUsers: action.payload.count}
        default:
            return state
    }
}

export type  fallowOrUnfollowActionType = ReturnType<typeof fallowOrUnfollowAC>
export type  setUsersActionType = ReturnType<typeof setUsersAC>
export type  setNumberPageActionType = ReturnType<typeof setNumberPageAC>
export type  setTotalCountsActionType = ReturnType<typeof setTotalCountsAC>

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
export const setNumberPageAC = (newPage: number) => {
    return {
        type: "SET-PAGE",
        payload: {newPage}
    } as const
}

export const setTotalCountsAC = (count: number) => {
    return {
        type: "SET-TOTAL-COUNT",
        payload: {count}
    } as const
}


