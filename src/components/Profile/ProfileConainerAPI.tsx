import React from "react";
import {ProfileUserType} from "../../redux/profiles-reducer";
import axios from "axios";
import {Profile} from "./Profile";
import {ProfilePropsType, PropsType} from "./ProfileContainer";
import {profileAPI} from "../api/api";

export class ProfileContainerAPI extends React.Component<PropsType,  ProfileUserType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = '2'
        }
        profileAPI.getProfile(userId)
            .then(response => {
                this.props.setAddProfileUser(response.data)
            })
    }
    render(){
        return(
            <>
                <Profile {...this.props} userProfile={this.props.profileUsers} />
            </>
        )
    }
}
