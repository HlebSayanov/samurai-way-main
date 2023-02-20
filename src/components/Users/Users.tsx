import React from 'react';
import {UsersTypeProps} from "./UsersContainer";
import styles from './Users.module.css'
import {UsersType} from "../../redux/users-reducer";
export const Users = (props:UsersTypeProps) => {

  props.usersPage.length === 0
  &&  props.setUsers([
        {
            id: 1,
            avatar: 'https://cdn.dribbble.com/users/1230354/screenshots/4923869/rickandmorty.png',
            fallow: true,
            fullName: 'Syanara',
            public: 'hello world',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            avatar: 'https://cdn.dribbble.com/users/1230354/screenshots/4923869/rickandmorty.png',
            fallow: true,
            fullName: 'qwqewrty',
            public: 'hehehehe',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            avatar: 'https://cdn.dribbble.com/users/1230354/screenshots/4923869/rickandmorty.png',
            fallow: false,
            fullName: 'kola',
            public: 'xzxzzxzxzx',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 4,
            avatar: 'https://cdn.dribbble.com/users/1230354/screenshots/4923869/rickandmorty.png',
            fallow: false,
            fullName: 'Yura',
            public: 'xzxzxzxxzx',
            location: {city: 'Minsk', country: 'Belarus'}
        },
    ] )

    return (
        <>
            {props.usersPage.map(el=>{
                const onClickHandler = () => {
                    props.checkedFallow(el.id,!el.fallow)
                    console.log(el.fallow, el.id)
                }

                return(
                    <div key={el.id}>
                        <img src={el.avatar} className={styles.avatar}/>
                        <div >{el.fallow ? <button onClick={onClickHandler}>Fallow</button>: <button onClick={onClickHandler}>Unfallow</button>}</div>

                        <span > { el.fullName}</span>
                        <div >{el.public}</div>
                            <div>{el.location.city}</div>
                            <div>{el.location.country}</div>
                    </div>
                )
            })}
        </>



    );
};
