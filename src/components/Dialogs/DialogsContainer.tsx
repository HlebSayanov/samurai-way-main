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
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


export type mapStateToPropsType = {
    dialogItems: DialogType[]
    messageItems: MessageType[]
    NewMessage: string

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
 export const DialogsContainer = compose<React.ComponentType>
 (
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)
