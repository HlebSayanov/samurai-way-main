import React from 'react';
import {UsersTypeProps} from "./UsersContainer";
import { ItmesType} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";



export class UsersComponentForAPI extends React.Component<UsersTypeProps, ItmesType[]> {

    componentDidMount() {
  this.props.getUsersThunkCreator(this.props.numberPage,this.props.pageSizeUsers)
    }

    changePage = (number: number) => {
        this.props.getUsersThunkCreator(number,this.props.pageSizeUsers)

    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsers={this.props.totalUsers}
                    pageSizeUsers={this.props.pageSizeUsers}
                    numberPage={this.props.numberPage}
                    followingProgress={this.props.followingProgress}
                    changePage={this.changePage}
                    usersPage={this.props.usersPage}
                    followUserThunkCreator={this.props.followUserThunkCreator}
                    unfollowUserThunkCreator={this.props.unfollowUserThunkCreator}
                />
            </>
        )


    }

};
