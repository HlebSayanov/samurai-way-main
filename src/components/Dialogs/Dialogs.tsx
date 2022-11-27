import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";
import state from "../../redux/state";


export const Dialogs = () => {

    // const dialogData = [
    //     {id: 1, name: 'Hleb'},
    //     {id: 2, name: 'Yuriy'},
    //     {id: 3, name: 'Alici'},
    //     {id: 4, name: 'Hyper'},
    //     {id: 5, name: 'Robinson'},
    // ]
    //
    // const messageData = [
    //     {title: 'Hello my friend'},
    //     {title: 'Welcome to Sayanara social network'},
    //     {title: 'One Love'},
    // ]


    let dialogItems = state.dialogPage.dialogs.map(el => <Dialog name={el.name} id={el.id}/>)
    let messageItems = state.dialogPage.messages.map(el => <Messages text={el.message}/>
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

