import React, {ChangeEvent} from 'react';
import {StoreType} from "../../redux/state";
import {ActionsTypesDialogs, addMessageAC, updateAddMessageAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";

type DialogsType = {
    store: StoreType // state
    dispatchDialogPage: (action: ActionsTypesDialogs) => void

}


export const DialogsContainer = (props: DialogsType) => {


    let dialogItems = props.store.getState().dialogPage.dialogs
    let messageItems = props.store.getState().dialogPage.messages
    let Newmessage = props.store.getState().dialogPage.newMessageText

    const addMessageTextArea = (value: string) => {
        props.dispatchDialogPage(updateAddMessageAC(value))
    }

    const AddMessageOnClick = (value:string) => {
        props.dispatchDialogPage(addMessageAC(value))
    }
    return (
        <>
     <Dialogs dialogItems={dialogItems}
              messageItems={messageItems}
              NewMessage={Newmessage}
              addMessageTextArea={addMessageTextArea}
              AddMessageOnClick={AddMessageOnClick}

     />
        </>
    );
};

