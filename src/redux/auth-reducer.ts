import {authAPI} from "../api/api";
import {AnyAction, Dispatch} from "redux";
import {AppStateType} from "./store-redux";
import {ThunkDispatch} from "redux-thunk";

export type ActionsTypes = setAuthForUserActionType | logOutAccountActionType


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
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case "LOG_OUT_ACCOUNT":
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }
}

export type  setAuthForUserActionType = ReturnType<typeof setAuthForUser>
export type  logOutAccountActionType = ReturnType<typeof logOutAccountAC>


export const setAuthForUser = (id: number, login: string, email: string) => {
    return {
        type: "SET_AUTH_FOR_USER",
        data: {id, login, email}
    } as const
}
export const logOutAccountAC = () => {
    return {
        type: "LOG_OUT_ACCOUNT",
    } as const
}


export const getAuthThunkCreator = () => (dispatch: Dispatch) => {
  return  authAPI.getAuth()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthForUser(id, login, email))
            }


        })
}


export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: TypedDispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthThunkCreator())
            }
            if (response.data.resultCode === 1) {
                alert(response.data.messages[0])
            }

        })



}
export const logOutTC = () => (dispatch: TypedDispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(logOutAccountAC())
            }

        })
}
type TypedDispatch = ThunkDispatch<AppStateType, any, AnyAction>;
