import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";
import state, {DialogType, MessageType} from "../../redux/state";

type DialogsType={
    dialogs:DialogType[]  // state
    messages:MessageType[]
}


export const Dialogs = (props: DialogsType) => {




    let dialogItems = props.dialogs.map(el => <Dialog name={el.name} id={el.id}/>) // dialog page array
    let messageItems = props.messages.map(el => <Messages  text={el.message} id={el.id}/> // messgae array data
    )

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogItems}
            </div>

            <div className={classes.messages}>
                {messageItems}
            </div>
        </div>
    );
};

