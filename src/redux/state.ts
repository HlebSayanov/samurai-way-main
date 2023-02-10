import {ActionsTypesProfiles, profilesReducer} from "./profiles-reducer";
import {ActionsTypesDialogs, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type MessageType = {
    id: number,
    message: string
}
export type DialogType = {
    id: number,
    name: string
}
export type PostType = {
    id: number,
    message: string,
    likeCount: number
}
export type PostDataType = {
    newPostText: string
    posts: PostType[]

}
export type DialogDataType = {

    dialogsALl: DialogType[],
    messages: MessageType[]
    newMessageText: string
}
export type Sidebar = {}
export type RootStateType = {
    postPage: PostDataType,
    dialogPage: DialogDataType,
    sidebar: Sidebar
}

export type ActionTypeforDispatch = ActionsTypesProfiles | ActionsTypesDialogs

export type StoreType = {
    _state: RootStateType
    _renderCallback: () => void
    // addPostBtn: (valuePost: string) => void
    // updateAddPost: (valueEvent: string) => void // до диспатча
    subscribe: (callbackRender: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypeforDispatch) => void
}

export const store: StoreType = {
    _state: {
        postPage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hello my friend. Haw are you?', likeCount: 12},
                {id: 2, message: 'When I returned home ?', likeCount: 12},
                {id: 3, message: 'When I returned home ?', likeCount: 12}
            ]
        },
        dialogPage: {
            newMessageText: '',
            dialogsALl: [
                {id: 1, name: 'Hleb'},
                {id: 2, name: 'Yuriy'},
                {id: 3, name: 'Alici'},
                {id: 4, name: 'Hyper'},
                {id: 5, name: 'Robinson'},
            ],
            messages: [
                {id: 1, message: 'Hello my friend'},
                {id: 2, message: 'Welcome to Sayanara social network'},
                // {id: 3, message: 'One Love'}
            ]
        },
        sidebar: {}
    },
    _renderCallback() {
        console.log('this is state')
    },

    subscribe(callbackRender: () => void) {
        this._renderCallback = callbackRender
    },
    getState() {
        return this._state
    },
    dispatch(action) {
         profilesReducer(this._state.postPage, action)
         // dialogsReducer(this._state.dialogPage, action)
        sidebarReducer(this.subscribe,action)
        this._renderCallback()
    }


}

