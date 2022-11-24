import React from "react";
import classes from "./Navbar.module.css";

export const Navbar = () =>{
    return (
        <>
            <nav className={classes.sidebar}>
                <div className={`${classes.item} ${classes.itemProfile}`}>
                    <a href="/profile">Profile </a>
                </div>
                <div className={classes.item}>
                    <a href="/dialogs">Messages </a>
                </div>
                <div className={classes.item}>
                    <a href="/news">News </a>
                </div>
                <div className={classes.item}>
                    <a href="/music">Music </a>
                </div>
                <div className={classes.item}>
                    <a href="/settings">Settings </a>
                </div>

            </nav>

        </>
    )
}