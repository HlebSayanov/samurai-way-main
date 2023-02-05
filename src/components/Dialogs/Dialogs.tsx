import React, {ChangeEvent} from 'react';
import classes from "./Dialogs.module.css";
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";
import {
    DialogDataType, DialogType, MessageType

} from "../../redux/state";
import {ActionsTypesDialogs, addMessageAC, updateAddMessageAC} from "../../redux/dialogs-reducer";

type DialogsType = {
    dialogItems: DialogType[]
    messageItems: MessageType[]
    NewMessage: string
    addMessageTextArea: (value: string) => void
    AddMessageOnClick: (value: string) => void

}


export const Dialogs = (props: DialogsType) => {


    let dialogItems = props.dialogItems.map(el => <Dialog name={el.name} id={el.id}/>) // dialog page array
    let messageItems = props.messageItems.map(el => <Messages text={el.message} id={el.id}/>)
    let message = props.NewMessage

    const addMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let MessageValue = event.currentTarget.value
        props.addMessageTextArea(MessageValue)
    }

    const OnClickHandlerAddMessage = () => {
       props.AddMessageOnClick(message)
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

