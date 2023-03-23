import {connect} from "react-redux";
import {getProfileThunkCreator, ProfileUserType, setAddProfileUser} from "../../redux/profiles-reducer";
import {AppStateType} from "../../redux/store-redux";
import React from "react";
import {ProfileContainerAPI} from "./ProfileConainerAPI";
import {RouteComponentProps, withRouter} from "react-router-dom";


type MapDispatchToPropsType = {
    getProfileThunkCreator : (userId:string)=> void
}
type MapStateToPropsType = {
    profileUsers:ProfileUserType
    isAuth:boolean
}
type PathParamsType = {
    userId: string
}


 export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
export type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType


const mapStateToProps = (state:AppStateType):MapStateToPropsType=>{
    return{
        profileUsers: state.profiles.profileUser,
        isAuth:state.auth.isAuth
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainerAPI)
export const ProfileContainer = connect(mapStateToProps,{getProfileThunkCreator})(WithUrlDataContainerComponent)
