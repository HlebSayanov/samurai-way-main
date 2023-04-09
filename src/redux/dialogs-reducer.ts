export type ActionsTypesDialogs = addMessageACActionType
// другая вариация типизаций экшенов


export type MessageType = {
    id: number,
    message: string
}
export type DialogType = {
    id: number,
    name: string
}
const initialState = {
    dialogs: [
        {id: 1, name: 'Hleb'},
        {id: 2, name: 'Yuriy'},
        {id: 3, name: 'Alici'},
        {id: 4, name: 'Hyper'},
        {id: 5, name: 'Robinson'},
    ] as DialogType[],
    messages: [
        {id: 1, message: 'Hello my friend'},
        {id: 2, message: 'Welcome to Sayanara social network'},

    ] as MessageType[],

}
type initialStateType = typeof initialState

export const dialogsReducer = (state: initialStateType = initialState, action: ActionsTypesDialogs): initialStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {
                id: state.messages.length + 1,
                message: action.valueMessage
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],

            }

        default:
            return state
    }
}

export type addMessageACActionType = ReturnType<typeof addMessageAC>


export const addMessageAC = (valueMessage: string) => {
    return {
        type: "ADD-MESSAGE",
        valueMessage: valueMessage
    } as const
}
