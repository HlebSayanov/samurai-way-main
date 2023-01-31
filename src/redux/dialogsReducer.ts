import {DialogDataType} from "./state";
import {addPostAC, updateAddPostAC} from "./profilesReducer";

export type ActionsTypesDialogs =  ReturnType<typeof addMessageAC>// другая вариация типизаций экшенов
    | ReturnType<typeof updateAddMessageAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateAddPostAC>

export const dialogsReducer = (state:DialogDataType,action:ActionsTypesDialogs)=>{
switch (action.type){
    case 'ADD-MESSAGE':
        const newMessage = {
            id: state.messages.length + 1,
            message: action.valueMessage
        }
        state.messages.push(newMessage)
        state.newMessageText=''
        return
    case 'UPDATE-ADD-MESSAGE':
        return state.newMessageText = action.valueEvent
    default:
        return state
}
}


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
