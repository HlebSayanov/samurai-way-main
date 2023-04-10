import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean,
    login: string | null
    logOut: () => void
}

export const Header = (props: HeaderType) => {

    const onClickLogOut = () => {
        props.logOut()
    }

    return (
        <>
            <div className={classes.header}>
                <div>
                    <img
                        src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0"
                        alt="logo"/>
                </div>
                <div className={classes.auth}>

                    {props.isAuth
                        ? <div>{props.login}
                            <button onClick={onClickLogOut}>Log out</button>
                        </div>
                        : < NavLink to={'/login'}>Login</NavLink>
                    }
                </div>

            </div>

        </>
    );
}

