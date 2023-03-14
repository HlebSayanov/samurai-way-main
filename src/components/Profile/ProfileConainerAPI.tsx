import React from "react";
import {ProfileUserType} from "../../redux/profiles-reducer";
import axios from "axios";
import {Profile} from "./Profile";
import {ProfilePropsType, PropsType} from "./ProfileContainer";

export class ProfileContainerAPI extends React.Component<PropsType,  ProfileUserType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
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
