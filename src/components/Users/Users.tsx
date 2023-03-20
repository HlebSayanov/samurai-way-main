import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../assets/images/rickAva.png";
import {ItmesType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {userAPI} from "../api/api";

type UserType = {
    usersPage: ItmesType[]
    totalUsers: number
    pageSizeUsers: number
    numberPage: number
    followingProgress:Array<number>

    changePage: (number: number) => void
    checkedFallow: (usersId: number, isDone: boolean) => void
    toggleFallowingDisableBtn: (isFetching: boolean,userId:number) => void

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
                const disable = props.followingProgress.some(elementId=> elementId ===el.id)

                const onClickHandlerUnfollowUser = () => {
                   props.toggleFallowingDisableBtn(true,el.id)
                    userAPI.unfollowUser(el.id)
                        .then(data => {
                            if (data.resultCode === 0) {
                                props.checkedFallow(el.id, false)
                                props.toggleFallowingDisableBtn(false,el.id)
                            }

                        })
                }

                const onClickHandlerFollowUser = () => {
                    props.toggleFallowingDisableBtn(true,el.id)
                    userAPI.followUser(el.id)
                        .then(data => {
                            if (data.resultCode === 0) {
                                props.checkedFallow(el.id, true)
                                props.toggleFallowingDisableBtn(false,el.id)
                                console.log(data);
                            }
                        })
                }

                return (
                    <div key={el.id}>
                        <NavLink to={'/profile/' + el.id}>
                            <img src={el.photos === null ? el.photos : userPhoto} className={styles.avatar}/>
                        </NavLink>
                        <div>
                            {el.followed
                                ? <button disabled={disable} onClick={onClickHandlerUnfollowUser}>Fallow</button>
                                : <button disabled={disable} onClick={onClickHandlerFollowUser}>Unfallow</button>}
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
