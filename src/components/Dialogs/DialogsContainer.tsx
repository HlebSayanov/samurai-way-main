import React from 'react';
import {
    addMessageAC,
    DialogType,
    MessageType,
    updateAddMessageAC
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store-redux";
import {Dispatch} from "redux";


export type mapStateToPropsType = {
    dialogItems: DialogType[]
    messageItems: MessageType[]
    NewMessage: string
    isAuth:boolean
}

type mapDispatchToPropsType = {
    addMessageTextArea: (value: string) => void
    AddMessageOnClick: (value: string) => void
}

export type DialogsTypeProps = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogItems: state.dialogs.dialogs,
        messageItems: state.dialogs.messages,
        NewMessage: state.dialogs.newMessageText,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessageTextArea: (value: string) => {
            dispatch(updateAddMessageAC(value))
        },
        AddMessageOnClick: (value: string) => {
            dispatch(addMessageAC(value))
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
