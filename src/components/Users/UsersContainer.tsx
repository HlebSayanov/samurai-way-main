import React from 'react';
import {connect} from "react-redux";
import {UsersComponentForAPI} from "./UsersComponentForAPI";
import {AppStateType} from "../../redux/store-redux";
import {
    ItmesType,
    getUsersThunkCreator,
    followUserThunkCreator,
    unfollowUserThunkCreator
} from "../../redux/users-reducer";


type mapStateToPropsType = {
    usersPage: ItmesType[]
    pageSizeUsers: number
    totalUsers: number
    numberPage: number
    isFetching: boolean
    followingProgress: Array<number>
    isAuth:boolean

}
type mapDispatchToPropsType = {
    getUsersThunkCreator: (numberPage: number, pageSizeUsers: number) => void
    followUserThunkCreator: (userId: number) => void
    unfollowUserThunkCreator: (userId: number) => void
}
export type UsersTypeProps = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.items.items,
        pageSizeUsers: state.items.pageSizeUsers,
        totalUsers: state.items.totalUsers,
        numberPage: state.items.numberPage,
        isFetching: state.items.isFetching,
        followingProgress: state.items.followingProgress,
        isAuth:state.auth.isAuth

    }
}

export const UsersContainer = connect(
    mapStateToProps,
    {getUsersThunkCreator, followUserThunkCreator, unfollowUserThunkCreator})
(UsersComponentForAPI)
