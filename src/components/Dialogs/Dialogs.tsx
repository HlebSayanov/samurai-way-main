import React from 'react';
import classes from "./Dialogs.module.css";
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";
import {DialogsTypeProps} from "./DialogsContainer";
import {AddMessageForm} from "../AddMessageForm/AddMessageForm";


// DialogsTypeProps экспорт из контейнера


export const Dialogs = (props: DialogsTypeProps) => {


    let dialogItems = props.dialogItems.map(el => <Dialog key={el.id} name={el.name} id={el.id}/>) // dialog page array
    let messageItems = props.messageItems.map(el => <Messages key={el.id} text={el.message} id={el.id}/>)


    // const addMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //     let messageValue = event.currentTarget.value
    //     props.addMessageTextArea(messageValue)                       //перерисовка каждого симовла из редлюсера
    // }
    const OnClickAddMessage = (value:string) => {
        props.AddMessageOnClick(value)

    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogItems}

                {/*<textarea onChange={addMessage} value={message}></textarea>*/}      {/* перерисовка каждого симовла из редлюсера}
                {/*<button onClick={OnClickHandlerAddMessage}>add message</button>*/}

                <AddMessageForm addMessage={OnClickAddMessage}/>                      {/* напрямую через Хук ФОРМ */}
            </div>
            <div className={classes.messages}>
                {messageItems}
            </div>
        </div>
    );
};
