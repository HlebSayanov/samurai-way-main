import React from 'react';
import {UsersTypeProps} from "./UsersContainer";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../assets/images/rickAva.png'


export const Users = (props: UsersTypeProps) => {

    props.usersPage.length === 0
    && axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        debugger
        props.setUsers(response.data.items)
    })
    return (
        <>
            {props.usersPage.map(el => {
                const onClickHandler = () => {
                    props.checkedFallow(el.id, !el.followed)
                    console.log(el.followed, el.id)
                }

                return (
                    <div key={el.id}>
                        <img src={el.photos === null ? el.photos : userPhoto} className={styles.avatar}/>
                        <div>{el.followed ? <button onClick={onClickHandler}>Fallow</button> :
                            <button onClick={onClickHandler}>Unfallow</button>}</div>

                        <span> {el.name}</span>
                        <div>{el.status}</div>
                        <div>{'el.location.city'}</div>
                        <div>{'el.location.country'}</div>
                    </div>
                )
            })}
        </>


    );
};
