import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";



export const Header = (props:{ isAuth: boolean  , login:string | null }) => {

    return (
    <>
        <div className={classes.header}>
            <div>
                <img
                    src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0"
                    alt="logo"/>
            </div>
            <div className = {classes.auth}>

                {props.isAuth ? props.login
                 : < NavLink to={'/login'}>Login</NavLink>
                }
            </div>

        </div>

    </>
    );
}
