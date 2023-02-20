import {combineReducers, createStore} from "redux";
import {profilesReducer} from "./profiles-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";



const rootReducers = combineReducers({
    profiles: profilesReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    users:usersReducer
})

export const storeRedux = createStore(rootReducers)

export type ReduxStoreType = typeof storeRedux

export type AppStateType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = storeRedux
