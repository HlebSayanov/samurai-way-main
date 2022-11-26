import React from 'react';
import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

export type DialogType={
    name: string,
    id:string
}

export const Dialog = (props:DialogType) => {
    return (

        <div className={classes.dialog + ' ' + classes.activeDialog}>
            <NavLink to={'/dialogs/'+props.id} activeClassName={classes.active}>{props.name}</NavLink>

        </div>

    );
};

