import {log} from "util";
import {renderTree} from "../render";

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
    newPostText:string
    posts: PostType[]

}
export type DialogDataType = {
    dialogs: DialogType[],
    messages: MessageType[]
}
export type Sidebar = {}


export type RootStateType = {
    postPage: PostDataType,
    dialogPage: DialogDataType,
    sidebar: Sidebar
}


let state: RootStateType = {
    postPage: {
        newPostText:'',
        posts: [
            {id: 1, message: 'Hello my friend. Haw are you?', likeCount: 12},
            {id: 2, message: 'When I returned home ?', likeCount: 12},
            {id: 3, message: 'When I returned home ?', likeCount: 12}
        ]
    },
    dialogPage: {
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

}


export const addPost = (valuePost: string) => {
    const newPost = {
        id: state.postPage.posts.length + 1,
        message: valuePost,
        likeCount: 0
    }
    state.postPage.posts.push(newPost)
    state.postPage.newPostText = ''
    renderTree(state)
    console.log(state.postPage.posts);
}

export const updateAddPost = (valueEvent:string) =>{
    state.postPage.newPostText= valueEvent
     renderTree(state)

}


export default state