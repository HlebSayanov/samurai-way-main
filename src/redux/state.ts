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
    newMessageText: string
    dialogs: DialogType[],
    messages: MessageType[]
}
export type Sidebar = {}


export type RootStateType = {
    postPage: PostDataType,
    dialogPage: DialogDataType,
    sidebar: Sidebar
}


export type StoreType = {
    _state: RootStateType
    _renderCallback: () => void
    // addPostBtn: (valuePost: string) => void
    // updateAddPost: (valueEvent: string) => void // до диспатча
    subscriber: (callbackRender: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
// type AddPostActionType={
//     type:'ADD-POST'
//     valuePost:string
// }     // изночальный тип экшенеов
// type UpdateAddPostActionType={
//     type:'UPDATE-ADD-POST'
//     valueEvent:string
// } // -//-  // bpy  type  //

export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateAddPostAC>
    | ReturnType<typeof addMessageAC>// другая вариация типизаций экшенов
    | ReturnType<typeof updateAddMessageAC>

export const addPostAC = (valuePost: string) => {
    return {
        type: "ADD-POST",
        valuePost: valuePost
    } as const
}               // вызывается Myposts
export const updateAddPostAC = (valueEvent: string) => {
    return {
        type: "UPDATE-ADD-POST",
        valueEvent: valueEvent
    } as const
}       //  аналогично
export const addMessageAC = (valueMessage: string) => {
    return {
        type: "ADD-MESSAGE",
        valueMessage: valueMessage
    } as const
}
export const updateAddMessageAC = (valueEvent: string) => {
    return {
        type: "UPDATE-ADD-MESSAGE",
        valueEvent: valueEvent
    } as const
}       //  аналогично
// вызывается Myposts

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
            dialogs: [
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

    subscriber(callbackRender: () => void) {
        this._renderCallback = callbackRender
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: this._state.postPage.posts.length + 1,
                message: action.valuePost,
                likeCount: 0
            }
            this._state.postPage.posts.push(newPost)
            this._state.postPage.newPostText = ''
            this._renderCallback()

        } else if (action.type === 'UPDATE-ADD-POST') {
            this._state.postPage.newPostText = action.valueEvent
            this._renderCallback()
        }
        else if (action.type === 'ADD-MESSAGE') {
            const newMessage = {
                id: this._state.dialogPage.messages.length + 1,
                message: action.valueMessage
            }
            this._state.dialogPage.messages.push(newMessage)
            this._state.dialogPage.newMessageText =''
            this._renderCallback()
        }
        else if (action.type === 'UPDATE-ADD-MESSAGE') {
          this._state.dialogPage.newMessageText = action.valueEvent

            this._renderCallback()
        }

    }

}

