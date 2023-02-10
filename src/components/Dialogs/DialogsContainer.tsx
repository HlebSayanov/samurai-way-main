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


// export const DialogsContainer12 = () => {
//
//
//
//     return (
//         <>
//             <StoreContext.Consumer>
//                 {
//                     (store)=>{
//                         let dialogItems = store.getState().dialogs.dialogsALl
//                         let messageItems = store.getState().dialogs.messages
//                         let Newmessage = store.getState().dialogs.newMessageText
//
//                         const addMessageTextArea = (value: string) => {
//                             store.dispatch(updateAddMessageAC(value))
//                         }
//
//                         const AddMessageOnClick = (value:string) => {
//                             store.dispatch(addMessageAC(value))
//                         }
//                         return <Dialogs dialogItems={dialogItems}
//                                         messageItems={messageItems}
//                                         NewMessage={Newmessage}
//                                         addMessageTextArea={addMessageTextArea}
//                                         AddMessageOnClick={AddMessageOnClick}
//
//                         />
//                     }
//                 }
//
//
//             </StoreContext.Consumer>
//
//         </>
//     );
// };

export type mapStateToPropsType = {
    dialogItems: DialogType[]
    messageItems: MessageType[]
    NewMessage: string
}

export type mapDispatchToPropsType = {
    addMessageTextArea: (value: string) => void
    AddMessageOnClick: (value: string) => void
}

export type DialogsTypeProps = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogItems: state.dialogs.dialogs,
        messageItems: state.dialogs.messages,
        NewMessage: state.dialogs.newMessageText
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
