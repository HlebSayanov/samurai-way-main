import {connect} from "react-redux";
import {ProfileUserType, setAddProfileUser} from "../../redux/profiles-reducer";
import {AppStateType} from "../../redux/store-redux";
import React from "react";
import {ProfileContainerAPI} from "./ProfileConainerAPI";
import {RouteComponentProps, withRouter} from "react-router-dom";


type MapDispatchToPropsType = {
    setAddProfileUser : (profileUser: ProfileUserType) =>void
}
type MapStateToPropsType = {
    profileUsers:ProfileUserType
}
type PathParamsType = {
    userId: string
}


 export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
export type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType


const mapStateToProps = (state:AppStateType):MapStateToPropsType=>{
    return{
        profileUsers: state.profiles.profileUser
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainerAPI)
export const ProfileContainer = connect(mapStateToProps,{setAddProfileUser})(WithUrlDataContainerComponent)
