import React, {ChangeEvent} from 'react';
import classes from "./Dialogs.module.css";
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";
import {
    DialogDataType

} from "../../redux/state";
import {ActionsTypesDialogs, addMessageAC, updateAddMessageAC} from "../../redux/dialogsReducer";

type DialogsType = {
    dialogPage: DialogDataType // state
    dispatchDialogPage:(action:ActionsTypesDialogs)=>void

}


export const Dialogs = (props: DialogsType) => {


    let dialogItems = props.dialogPage.dialogs.map(el => <Dialog name={el.name} id={el.id}/>) // dialog page array
    let messageItems = props.dialogPage.messages.map(el => <Messages text={el.message} id={el.id}/> //  messgae array data
    )
let message = props.dialogPage.newMessageText
    const addMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatchDialogPage(updateAddMessageAC(event.currentTarget.value))
    }

    const OnClickHandlerAddMessage = () => {
        props.dispatchDialogPage(addMessageAC(message))
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogItems}
                <textarea onChange={addMessage} value={message}></textarea>

                <button onClick={OnClickHandlerAddMessage}>add message</button>
            </div>




            <div className={classes.messages}>

                {messageItems}

            </div>



        </div>
    );
};

