import {connect} from "react-redux";
import {getProfileThunkCreator, ProfileUserType, setAddProfileUser} from "../../redux/profiles-reducer";
import {AppStateType} from "../../redux/store-redux";
import React from "react";

import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {Profile} from "./Profile";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type MapDispatchToPropsType = {
    getProfileThunkCreator : (userId:string)=> void
}
type MapStateToPropsType = {
    profileUsers:ProfileUserType

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
        this.props.getProfileThunkCreator(userId)
    }
    render(){

        return(
            <>

                <Profile {...this.props} userProfile={this.props.profileUsers} />
            </>
        )

    }
}


const mapStateToProps = (state:AppStateType):MapStateToPropsType=>{
    return{
        profileUsers: state.profiles.profileUser,

    }
}
 let WithUrlDataContainerComponent = withRouter(ProfileContainer)
// export const WithAuthRedirect (connect(mapStateToProps,{getProfileThunkCreator})(WithUrlDataContainerComponent))

export default compose<React.ComponentType>(
    connect(mapStateToProps,{getProfileThunkCreator}),
    withRouter,
    WithAuthRedirect
)
(ProfileContainer)
