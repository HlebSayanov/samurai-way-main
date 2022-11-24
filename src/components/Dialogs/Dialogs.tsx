import React from 'react';
import classes from "./Dialogs.module.css";


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.activeDialog}>Hleb</div>
                <div className={classes.dialog}>Andrey</div>
                <div className={classes.dialog}>Viktoryia</div>
                <div className={classes.dialog}>Iryna</div>
                <div className={classes.dialog}>Yuri</div>
            </div>

            <div className={classes.messages}>
                <div className={classes.messageUser}>Hello</div>
                <div className={classes.messageUser}>Welcom to social network</div>
                <div className={classes.messageUser}>How to go Cyprus</div>

            </div>
        </div>
    );
};

