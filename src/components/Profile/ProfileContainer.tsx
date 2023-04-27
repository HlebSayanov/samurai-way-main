import {connect} from "react-redux";
import {getProfileTC, getStatusTC, ProfileUserType, updateStatusTC} from "../../redux/profiles-reducer";
import {AppStateType} from "../../redux/store-redux";
import React from "react";

import {RouteComponentProps, withRouter} from "react-router-dom";
import {Profile} from "./Profile";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type MapDispatchToPropsType = {
    getProfileTC: (userId: string) => void
    getStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
}
type MapStateToPropsType = {
    profileUsers: ProfileUserType
    statusProfileUser: string
    authorizedUserId: number | null

}
type PathParamsType = {
    userId: string
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
export type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType


class ProfileContainer extends React.Component<PropsType, ProfileUserType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.authorizedUserId === null ? '2' : this.props.authorizedUserId.toString()
        this.props.getProfileTC(userId)
        this.props.getStatusTC(userId)

    }

    render() {

        return (
            <>

                <Profile {...this.props}
                         userProfile={this.props.profileUsers}
                         status={this.props.statusProfileUser}
                         updateStatus={this.props.updateStatusTC}
                />

            </>
        )

    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profileUsers: state.profiles.profileUser,
        statusProfileUser: state.profiles.status,
        authorizedUserId:state.auth.id

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
   WithAuthRedirect
)
(ProfileContainer)
