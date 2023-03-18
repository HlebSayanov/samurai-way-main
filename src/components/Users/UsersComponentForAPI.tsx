import React from 'react';
import {UsersTypeProps} from "./UsersContainer";
import {ItmesType} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {userAPI} from "../api/api";


export class UsersComponentForAPI extends React.Component<UsersTypeProps, ItmesType[]> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        userAPI.getUsers(this.props.numberPage,this.props.pageSizeUsers)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCounts(data.totalCount > 100 ? 54 : 0)
            })

    }

    changePage = (number: number) => {
        this.props.toggleIsFetching(true)
        this.props.setNumberPage(number)
        userAPI.getUsers(number,this.props.pageSizeUsers)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsers={this.props.totalUsers}
                    pageSizeUsers={this.props.pageSizeUsers}
                    numberPage={this.props.numberPage}
                    changePage={this.changePage}
                    usersPage={this.props.usersPage}
                    checkedFallow={this.props.fallowOrUnfollow}
                />
            </>
        )


    }

};
