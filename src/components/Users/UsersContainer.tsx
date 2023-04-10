import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store-redux";
import {
    followUserThunkCreator,
    getUsersThunkCreator,
    ItmesType,
    unfollowUserThunkCreator
} from "../../redux/users-reducer";
import {Preloader} from "../common/Preloader/Preloader";
import {Users} from "./Users";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
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


class UsersContainer extends React.Component<UsersTypeProps, ItmesType[]> {

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

export default compose<React.ComponentType>(
        connect(mapStateToProps, {getUsersThunkCreator, followUserThunkCreator, unfollowUserThunkCreator}),
        WithAuthRedirect
    )(UsersContainer)

