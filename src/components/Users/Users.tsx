import React from 'react';
import {UsersTypeProps} from "./UsersContainer";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../assets/images/rickAva.png'
import {ItmesType} from "../../redux/users-reducer";


 export  class Users extends React.Component<UsersTypeProps,ItmesType[]>   {
    constructor(props:UsersTypeProps) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

            this.props.setUsers(response.data.items)})
    }


    render(){
        return (
            <>

                {this.props.usersPage.map(el => {
                    const onClickHandler = () => {
                        this.props.checkedFallow(el.id, !el.followed)
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
    }

};
