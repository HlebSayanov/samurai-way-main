import {DialogDataType} from "./state";
import {addPostAC, updateAddPostAC} from "./profiles-reducer";

export type ActionsTypesDialogs =  ReturnType<typeof addMessageAC>// другая вариация типизаций экшенов
    | ReturnType<typeof updateAddMessageAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateAddPostAC>


// addMessageACActionType | updateAddMessageACActionType


const initialState:DialogDataType ={
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
}

export const dialogsReducer = (state:DialogDataType =initialState,action:ActionsTypesDialogs)=>{
switch (action.type){
    case 'ADD-MESSAGE':
        const newMessage = {
            id: state.messages.length + 1,
            message: action.valueMessage
        }
        let copyState = {...state}
        copyState.messages.push(newMessage)
        copyState.newMessageText=''
        return copyState
    case 'UPDATE-ADD-MESSAGE':
        return{...state,newMessageText: action.valueEvent}
    default:
        return state
}
}

export type addMessageACActionType = ReturnType<typeof addMessageAC>
export type updateAddMessageACActionType = ReturnType<typeof updateAddMessageAC>

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
