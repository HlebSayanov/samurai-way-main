import {authAPI} from "../components/api/api";
import {Dispatch} from "redux";

export type ActionsTypes = setAuthForUserActionType


export type AuthType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false

} as AuthType

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET_AUTH_FOR_USER":
            console.log('sadsa')
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export type  setAuthForUserActionType = ReturnType<typeof setAuthForUser>


export const setAuthForUser = (id: number, login: string, email: string) => {
    return {
        type: "SET_AUTH_FOR_USER",
        data: {id, login, email}
    } as const
}
export const getAuthThunkCreator = () => (dispatch: Dispatch) => {
    authAPI.getAuth()
        .then(response => {
            if(response.data.resultCode === 0){
                let {id, login, email} = response.data.data
                dispatch(setAuthForUser(id, login, email))
            }

            console.log(response.data.data)
        })
}
