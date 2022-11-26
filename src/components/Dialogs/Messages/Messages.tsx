import React from 'react';
import classes from "./Messages.module.css";
import {NavLink} from "react-router-dom";

export type MessagesType = {
    text: string
}

export const Messages = (props: MessagesType) => {
    return (
        <div>
            <div className={classes.messageUser}>{props.text}</div>
        </div>
    );
};

