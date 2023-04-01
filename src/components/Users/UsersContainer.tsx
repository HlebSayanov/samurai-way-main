import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store-redux";
import {
    ItmesType,
    getUsersThunkCreator,
    followUserThunkCreator,
    unfollowUserThunkCreator
} from "../../redux/users-reducer";
import {Redirect, RouteComponentProps} from "react-router-dom";
import {Preloader} from "../common/Preloader/Preloader";
import {Users} from "./Users";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {UsersComponentForAPI} from "./UsersComponentForAPI";
import {compose} from "redux";


type mapStateToPropsType = {
    usersPage: ItmesType[]
    pageSizeUsers: number
    totalUsers: number
    numberPage: number
    isFetching: boolean
    followingProgress: Array<number>


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


    }
}

export const UsersContainer  =
    compose<React.ComponentType>(
        connect(mapStateToProps, {getUsersThunkCreator, followUserThunkCreator, unfollowUserThunkCreator}),
        WithAuthRedirect
    )(UsersComponentForAPI)

