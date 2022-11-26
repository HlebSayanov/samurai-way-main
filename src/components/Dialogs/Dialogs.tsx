import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
            <Dialog name={'Hleb'} id={'1'}/>
            <Dialog name={'Yuriy'} id={'2'}/>
            <Dialog name={'Alici'} id={'3'}/>
            <Dialog name={'Hyper'} id={'4'}/>
            <Dialog name={'Robinson'} id={'5'}/>
               </div>

            <div className={classes.messages}>
              <Messages text={'Hello my friend'}/>
              <Messages text={'Welcome to Sayanara social network'}/>
              <Messages text={'One Love'}/>

            </div>
        </div>
    );
};

