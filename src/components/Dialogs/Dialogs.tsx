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


    let dialogItems = dialogData.map(el => <Dialog name={el.name} id={el.id}/>)
    let mesageItems = messageData.map(el => <Messages text={el.title}/>
    )

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogItems}
            </div>

            <div className={classes.messages}>
                {mesageItems}
            </div>
        </div>
    );
};

