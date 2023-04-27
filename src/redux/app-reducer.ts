import {authAPI} from "../api/api";
import {AnyAction, Dispatch} from "redux";
import {AppStateType} from "./store-redux";
import {ThunkDispatch} from "redux-thunk";
import {getAuthThunkCreator, setAuthForUser} from "./auth-reducer";

export type ActionsTypes = setInitializedSuccessActionType

const initialState = {
    initialized:false

}

export type InitialStateTypeApp = typeof initialState

export const appReducer = (state: InitialStateTypeApp = initialState, action: ActionsTypes): InitialStateTypeApp => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized:true
            }
        default:
            return state
    }
}

export type  setInitializedSuccessActionType = ReturnType<typeof initializedSuccessAC>



export const initializedSuccessAC = () => {
    return {
        type: "INITIALIZED_SUCCESS",
    } as const
}


export const setInitializedTC = () => (dispatch: TypedDispatch) => {
 dispatch(getAuthThunkCreator())
     .then(()=>{
         dispatch(initializedSuccessAC())
     })
}


type TypedDispatch = ThunkDispatch<AppStateType, any, AnyAction>;
