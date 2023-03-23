import React from "react";
import {ProfileUserType} from "../../redux/profiles-reducer";
import axios from "axios";
import {Profile} from "./Profile";
import {ProfilePropsType, PropsType} from "./ProfileContainer";
import {profileAPI} from "../api/api";
import {Redirect} from "react-router-dom";

export class ProfileContainerAPI extends React.Component<PropsType,  ProfileUserType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) userId = '2'
        this.props.getProfileThunkCreator(userId)

    }

    render(){
        if(!this.props.isAuth) return <Redirect to={'/login'}/>

        return(

            <>

                <Profile {...this.props} userProfile={this.props.profileUsers} />
            </>
        )
    }
}
