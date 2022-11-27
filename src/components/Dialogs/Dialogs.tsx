import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";


export const Dialogs = () => {

    const dialogData = [
        {id: 1, name: 'Hleb'},
        {id: 2, name: 'Yuriy'},
        {id: 3, name: 'Alici'},
        {id: 4, name: 'Hyper'},
        {id: 5, name: 'Robinson'},
    ]

    const messageData = [
        {title: 'Hello my friend'},
        {title: 'Welcome to Sayanara social network'},
        {title: 'One Love'},
    ]


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <Dialog name={dialogData[0].name} id={dialogData[0].id}/>

            </div>

            <div className={classes.messages}>
                <Messages text={messageData[0].title}/>
                <Messages text={messageData[1].title}/>
                <Messages text={messageData[2].title}/>

            </div>
        </div>
    );
};

