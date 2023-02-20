import {Debugger} from "inspector";


export type ActionsTypes = fallowOrUnfollowActionType | setUsersActionType

export type LocationType = {
    city: string,
    country: string
}
export type UsersType = {
    id: number,
    avatar:string
    fallow: boolean
    fullName: string
    public: string
    location: LocationType
}
export type UsersTest = {
    users:UsersType[]
}

const initialState = {
users:[] as UsersType[]

}

type InitialStateType = typeof initialState

export const usersReducer = (state:InitialStateType=initialState, action: ActionsTypes):InitialStateType=> {
    switch (action.type) {
        case "FOLLOW-UNFOLLOW":
            return {
                ...state, users: state.users.map(el => el.id === action.payload.usersId
                    ? {...el, fallow: action.payload.isDone}
                    : el)
            }
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.payload.newUsers]}
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

export const setUsersAC = (newUsers:UsersType[] ) => {
    return {
        type: "SET-USERS",
        payload: {newUsers}
    } as const
}

