import {connect} from "react-redux";
import {ProfileUserType, setAddProfileUser} from "../../redux/profiles-reducer";
import {AppStateType} from "../../redux/store-redux";
import React from "react";
import axios from "axios";
import {Profile} from "./Profile";
import {ProfileContainerAPI} from "./ProfileConainerAPI";


type MapDispatchToPropsType = {
    setAddProfileUser : (profileUser: ProfileUserType) =>void
}
type MapStateToPropsType = {
    profileUsers:ProfileUserType
}
 export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state:AppStateType):MapStateToPropsType=>{
    return{
        profileUsers: state.profiles.profileUser
    }
}

export const ProfileContainer = connect(mapStateToProps,{setAddProfileUser})(ProfileContainerAPI)
