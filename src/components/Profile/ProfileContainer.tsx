import {connect} from "react-redux";
import {
    getProfileTC,
    getStatusTC,
    ProfileUserType,
    setAddProfileUser,
    updateStatusTC
} from "../../redux/profiles-reducer";
import {AppStateType} from "../../redux/store-redux";
import React from "react";

import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {Profile} from "./Profile";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import Login from "../Login/Login";


type MapDispatchToPropsType = {
    getProfileTC : (userId:string)=> void
    getStatusTC :(userId:string)=>void
    updateStatusTC:(status:string)=>void
}
type MapStateToPropsType = {
    profileUsers:ProfileUserType
    statusProfileUser:string

}
type PathParamsType = {
    userId: string
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
export type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

export class ProfileContainer extends React.Component<PropsType,  ProfileUserType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) userId = '2'
        this.props.getProfileTC(userId)
        this.props.getStatusTC(userId)

    }
    render(){

        return(
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


const mapStateToProps = (state:AppStateType):MapStateToPropsType=>{
    return{
        profileUsers: state.profiles.profileUser,
        statusProfileUser:state.profiles.status

    }
}
 // let WithUrlDataContainerComponent = withRouter(ProfileContainer)
// export const WithAuthRedirect (connect(mapStateToProps,{getProfileThunkCreator})(WithUrlDataContainerComponent))

export default compose<React.ComponentType>(
    connect(mapStateToProps,{getProfileTC, getStatusTC,updateStatusTC}),
    withRouter,
    WithAuthRedirect
)
(ProfileContainer)
