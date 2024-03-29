import {applyMiddleware, combineReducers, createStore} from "redux";
import {profilesReducer} from "./profiles-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-reducer";



const rootReducers = combineReducers({
    profiles: profilesReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    items:usersReducer,
    auth:authReducer,
    app:appReducer
})

export const storeRedux = createStore(rootReducers,applyMiddleware(thunkMiddleware))



export type AppStateType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = storeRedux
