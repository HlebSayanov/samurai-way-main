import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.activeDialog}>
                  <NavLink to={'/dialogs/1'}>Hleb</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/dialogs/2'}> Andrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/dialogs/3'}> Viktoryia</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/dialogs/4'}> Iryna</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/dialogs/5'}> Yuri</NavLink>
                </div>
            </div>

            <div className={classes.messages}>
                <div className={classes.messageUser}>Hello</div>
                <div className={classes.messageUser}>Welcom to social network</div>
                <div className={classes.messageUser}>How to go Cyprus</div>

            </div>
        </div>
    );
};

