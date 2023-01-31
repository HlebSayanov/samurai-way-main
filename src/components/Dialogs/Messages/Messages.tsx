import React, {ChangeEvent} from 'react';
import classes from "./Messages.module.css";
import {NavLink} from "react-router-dom";

export type MessagesType = {
    text: string
    id:number
}

export const Messages = (props: MessagesType) => {



    return (
        <div className={classes.messagesUsers}>
            <img className={classes.userImg} src="https://icon-library.com/images/morty-icon/morty-icon-4.jpg" alt="avatar"/>
            <div className={classes.messageUser}>{props.text}</div>



        </div>
    );
};

