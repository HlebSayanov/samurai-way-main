
type MessageType = {
    id: number,
    message: string
}
type DialogType = {
    id: number,
    name: string
}
type PostType = {
    id: number,
    message: string,
    likeCount: number
}
type PostDataType = {
    posts: PostType[]
}
type DialogDataType = {
    dialogs: DialogType[],
    messages: MessageType[]
}
type Sidebar = {}


type RootStateType = {
    postPage:PostDataType,
    dialogPage:DialogDataType,
    sidebar:Sidebar
}


let state:RootStateType = {
    postPage: {
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
            {id: 3, message: 'One Love'}
        ]
    },
        sidebar: {}

}
export default state