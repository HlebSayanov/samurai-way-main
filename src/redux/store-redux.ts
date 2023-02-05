import {combineReducers, createStore} from "redux";
import {profilesReducer} from "./profiles-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {StoreType} from "./state";


const rootReducers = combineReducers({
    profiles: profilesReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer
})

export const storeRedux = createStore(rootReducers)

export type ReduxStoreType = typeof storeRedux

export type RootAllReducersType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = storeRedux
