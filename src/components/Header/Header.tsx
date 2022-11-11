import React from "react";
import classes from './Header.module.css'


export const Header = () => {
    return (
    <>
        <div className={classes.header}>
            <div>
                <img
                    src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0"
                    alt="logo"/>
            </div>
        </div>

    </>
    );
}