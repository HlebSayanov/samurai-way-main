import {combineReducers, createStore} from "redux";
import {profilesReducer} from "./profilesReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";


const rootReducers = combineReducers({
    profiles:profilesReducer,
    dialogs:dialogsReducer,
    sidebar:sidebarReducer
})

export const store = createStore(rootReducers)

export type RootAllReducersType = ReturnType<typeof rootReducers>
