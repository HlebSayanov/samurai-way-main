
export type ActionsTypes =setAuthForUserActionType


export type AuthType = {
    id:number  | null
    login:string | null
    email:string | null
    isAuth?: boolean
}

const initialState = {
    id:null,
    login:null,
    email:null,
isAuth:false

} as AuthType

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET_AUTH_FOR_USER":
            return {
                ...state,
                ...action.data,
                    isAuth:true
            }
        default:
            return state
    }
}

export type  setAuthForUserActionType = ReturnType<typeof setAuthForUser>


export const setAuthForUser = (id:number, login:string, email:string) => {
    return {
        type: "SET_AUTH_FOR_USER",
        data: {id, login,email}
    } as const
}