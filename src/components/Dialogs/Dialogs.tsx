import React, {ChangeEvent} from 'react';
import classes from "./Dialogs.module.css";
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";


import {DialogsTypeProps} from "./DialogsContainer";


// DialogsTypeProps экспорт из контейнера



export const Dialogs = (props: DialogsTypeProps) => {


    let dialogItems = props.dialogItems.map(el => <Dialog key={el.id} name={el.name} id={el.id}/>) // dialog page array
    let messageItems = props.messageItems.map(el => <Messages key={el.id} text={el.message} id={el.id}/>)
    let message = props.NewMessage

    const addMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let messageValue = event.currentTarget.value
        props.addMessageTextArea(messageValue)

    }

    const OnClickHandlerAddMessage = () => {
        props.AddMessageOnClick(message)
        console.log(message)
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


export const addMessageForm = ()=>{
    return(
        <div>

        </div>
    )
}
