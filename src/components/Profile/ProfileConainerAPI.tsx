import React from "react";
import {ProfileUserType} from "../../redux/profiles-reducer";
import axios from "axios";
import {Profile} from "./Profile";
import {ProfilePropsType} from "./ProfileContainer";

export class ProfileContainerAPI extends React.Component<ProfilePropsType,  ProfileUserType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setAddProfileUser(response.data)
            })
    }
    render(){
        return(
            <>
                <Profile userProfile={this.props.profileUsers} />
            </>
        )
    }
}
