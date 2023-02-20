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

const initialState = {

    users: [
        {
            id: 1,
            avatar: 'https://cdn.dribbble.com/users/1230354/screenshots/4923869/rickandmorty.png',
            fallow: true,
            fullName: 'Syanara',
            public: 'hello world',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            avatar: 'https://cdn.dribbble.com/users/1230354/screenshots/4923869/rickandmorty.png',
            fallow: true,
            fullName: 'qwqewrty',
            public: 'hehehehe',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            avatar: 'https://cdn.dribbble.com/users/1230354/screenshots/4923869/rickandmorty.png',
            fallow: false,
            fullName: 'kola',
            public: 'xzxzzxzxzx',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 4,
            avatar: 'https://cdn.dribbble.com/users/1230354/screenshots/4923869/rickandmorty.png',
            fallow: false,
            fullName: 'Yura',
            public: 'xzxzxzxxzx',
            location: {city: 'Minsk', country: 'Belarus'}
        },
    ] as UsersType[]
}

type initialStateType = typeof initialState

export const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
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

export const setUsersAC = (newUsers: any) => {
    return {
        type: "SET-USERS",
        payload: {newUsers}
    } as const
}

