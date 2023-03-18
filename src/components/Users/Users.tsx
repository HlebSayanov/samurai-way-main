import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../assets/images/rickAva.png";
import {ItmesType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UserType = {
    usersPage: ItmesType[]
    totalUsers: number
    pageSizeUsers: number

    numberPage: number
    changePage: (number: number) => void
    checkedFallow: (usersId: number, isDone: boolean) => void

}


export const Users = (props: UserType) => {
    let arrTotalPage = []

    const pagesCount = Math.ceil(props.totalUsers / props.pageSizeUsers)
    for (let i = 1; i < pagesCount; i++) {
        arrTotalPage.push(i)
    }

    return (
        <>
            {arrTotalPage.map(el => {
                return <span onClick={() => props.changePage(el)}
                             className={props.numberPage === el ? styles.numberPage : ''}>{el}</span>
            })}
            {props.usersPage.map(el => {
                const onClickHandler = () => {
                    props.checkedFallow(el.id, !el.followed)
                    console.log(el.followed, el.id)
                }

                return (
                    <div key={el.id}>
                        <NavLink to={'/profile/' + el.id}>
                            <img src={el.photos === null ? el.photos : userPhoto} className={styles.avatar}/>
                        </NavLink>
                        <div>
                            {el.followed
                                ? <button onClick={()=>{
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,{
                                    withCredentials:true,

                                })
                                    .then(res=>{
                                        if(res.data.resultCode ===0){
                                            props.checkedFallow(el.id, false)
                                        }
                                        console.log(res);
                                    })
                                }
                                }>Fallow</button>
                                : <button onClick={()=>{
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,{},{
                                        withCredentials:true,


                                    })
                                        .then(res=>{
                                            if(res.data.resultCode ===0){
                                                props.checkedFallow(el.id, true)
                                            }

                                        })
                                }}>Unfallow</button>}
                        </div>

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
